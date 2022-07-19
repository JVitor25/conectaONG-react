import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { Box, Avatar, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./ListaPostagems.css"
import { toast } from "react-toastify";

export default function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (token === "") {
  //     toast.warn('Você precisa estar logado', {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'colored',
  //       });
  //     navigate("/login")

  //   }
  // }, [token]);

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
      <Grid container direction="column-reverse">
        {
          posts.map(post => (
            <Card variant="outlined" className="postagensFeed">
              <CardContent>
                <Grid
                  item
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
                          alt={post.usuario?.nome}
                          src={post.usuario?.foto}
                          sx={{ width: 72, height: 72 }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs>
                      <Box display="flex" justifyContent="space-between">
                        <Typography variant="h6">{post.usuario?.nome}</Typography>
                        {/* <IconButton>
                            <CreateIcon
                            />
                          </IconButton> */}
                      </Box>
                      <Box>
                        <Typography>Contato: {post.contato}</Typography>
                      </Box>
                      <Box>
                        <Typography>Publicada no dia: {new Date(post.data).toLocaleDateString()}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Box sx={{ textAlign: 'justify', m: 1 }}>
                      <Typography variant="h5" component="h2">{post.titulo}</Typography>
                      <Typography variant="body2" component="p">{post.mensagem}</Typography>
                      <Box display="flex" justifyContent="space-between" sx={{ paddingTop: 1, fontStyle: "italic", fontWeight: "bold" }}>Tema: {post.tema?.tema}
                        <Checkbox  icon={<FavoriteBorderIcon color="error"/>} checkedIcon={<FavoriteIcon color="error"/> } />       
                      </Box>
                    </Box>

                  </Grid>
                </Grid>
              </CardContent>

              {/* <CardActions>
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
                </CardActions> */}
            </Card>
          ))
        }
      </Grid >
    </>
  )
}