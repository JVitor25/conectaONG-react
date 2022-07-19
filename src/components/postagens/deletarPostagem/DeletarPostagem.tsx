import { Card, CardActions, CardContent, Divider, Grid, Typography } from "@material-ui/core";
import { Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import { buscarId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import "./DeletarPostagem.css";

export default function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token === "") {
      toast.warn('Você precisa estar logado.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        });
      navigate("/login")
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id]);

  async function findById(id: string) {
    buscarId(`/postagem/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate("/feed")
    deleteId(`/postagem/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Postagem deletada.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      });
  }

  function nao() {
    navigate("/feed")
  }

  return (
    <>
      <Grid container xs={12}>
        <Grid xs={4}></Grid>
        <Grid xs={4}>
          <Box m={2}>
            <Card variant="outlined" className="cardDeletarPostagem">
              <CardContent>
                <Box justifyContent="center">
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Deseja deletar a Postagem:
                  </Typography>
                  <Typography variant="h6" color="textSecondary" >
                    {post?.titulo}
                  </Typography>
                </Box>
              </CardContent>
              <Box display="flex" flexDirection="column" sx={{ width: "100%"}} alignItems="center">
                <Box sx={{ width: "95%" }}>
                  <Divider />
                </Box>
              </Box>
              <CardActions>
                <Box mb={0.5} mt={0.5} className="ActionsDeletarPostagem" >
                  <Box>
                    <Button onClick={nao} variant="contained" size='large' color="error">
                      Não
                    </Button>
                  </Box>
                  <Box mx={2}>
                    <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="success">
                      Sim
                    </Button>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
    </>
  );
}