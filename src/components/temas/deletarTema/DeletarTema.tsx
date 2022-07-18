import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { Button, Box } from '@mui/material';
import { buscarId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import "./DeletarTema.css";


function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscarId(`/tema/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate("/tema")
    deleteId(`/tema/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert("Tema deletado com sucesso!")
  }

  function nao() {
    navigate("/tema")
  }

  return (
    <>
      <Grid container xs={12}>
        <Grid xs={4}></Grid>
        <Grid xs={4}>
          <Box m={2}>
            <Card variant="outlined" className="cardDeletarTema">
              <CardContent>
                <Box justifyContent="center">
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Deseja deletar o Tema:
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {tema?.tema}
                  </Typography>
                </Box>
              </CardContent>
              <Box display="flex" flexDirection="column" sx={{ width: "100%" }} alignItems="center">
                <Box sx={{ width: "95%" }}>
                  <Divider />
                </Box>
              </Box>
              <CardActions>
                <Box mb={0.5} mt={0.5} className="ActionsDeletarTema" >
                  <Box>
                    <Button onClick={nao} variant="contained" size='large' color="error">
                      Não
                    </Button>
                  </Box>
                  <Box>
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
export default DeletarTema;