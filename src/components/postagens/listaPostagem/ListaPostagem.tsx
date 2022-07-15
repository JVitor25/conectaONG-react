import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { Box, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import "./ListaPostagems.css"

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
      <Grid>
        {
          posts.map(post => (
            <Box m={1} >
              <Card variant="outlined">
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="stretch"
                    spacing={1}
                  >
                    <Grid item
                      container
                      direction="row"
                      spacing={2}
                    >
                      <Grid item>
                        <Box marginLeft={1}>
                          <Avatar
                            //variant="rounded"
                            alt={post.usuario?.nome}
                            src={post.usuario?.foto}
                            sx={{ width: 90, height: 90 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="h6">{post.usuario?.nome}</Typography>
                          <IconButton>
                            <CreateIcon
                            />
                          </IconButton>
                        </Box>
                        <Box>
                          <Typography>Contato: {post.contato}</Typography>
                        </Box>
                        <Box>
                          <Typography>Publicada no dia: {post.data}</Typography>
                        </Box>

                      </Grid>
                    </Grid>
                    <Grid item >
                      <Box sx={{ textAlign: 'justify', m: 1 }}>
                        <Typography variant="h5" component="h2">{post.titulo}</Typography>
                        <Typography variant="body2" component="p">{post.mensagem}</Typography>
                        <Box display="flex" justifyContent="space-between" sx={{ paddingTop: 1, fontStyle: "italic", fontWeight: "bold" }}>Tema: {post.tema?.tema}
                          {/* <Typography variant="body1" component="h3" ></Typography> */}
                          <IconButton color="error">
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Box>
                      </Box>

                    </Grid>
                  </Grid>
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
                    <Box mx={1}>
                      <IconButton color="error">
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Box >

          ))
        }
      </Grid >
    </>
  )
}