import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";

export default function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token]);

  async function getPost() {
    await buscar("/postagem", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length]);

  return (
    <>
      {
        posts.map(post => (
          <Box m={3} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Postagens</Typography>
                <Typography variant="h5" component="h2">{post.titulo}</Typography>
                <Typography variant="body2" component="p">{post.mensagem}</Typography>
                <Typography variant="body2" component="p">{post.tema?.tema}</Typography>
                <Typography variant="body1" component="p">
                  <Box marginTop={1.5}>
                    Criado por: {post.usuario?.nome}
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}