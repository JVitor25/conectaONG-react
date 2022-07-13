import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
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
      <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
      { 

        posts.map(post => (
          <Box m={3} >
            <Card variant="outlined">
              <CardContent>
                <Grid container>
                  <Grid item xs={2}><img className="profileImg" src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" alt="" /> </Grid>
                  <Grid item container xs={4}> 
                    <Grid item> 
                    <Typography color="textSecondary" gutterBottom>{post.usuario?.nome}</Typography> 
                    </Grid> 
                    <Grid> 
                      <Typography>Lorem | Ipsulun | XPTO | CrossFit</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Typography variant="h5" component="h2">{post.titulo}</Typography>
                <Typography variant="body2" component="p">{post.mensagem}</Typography>
                <Typography variant="body2" component="p">{post.tema?.tema}</Typography>
                <Typography variant="body1" component="p"> </Typography>
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
                        <FavoriteBorderIcon/>
                      </IconButton>
                    </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
          
        ))
      }
      </Grid>
      <Grid item xs={4}></Grid>
      </Grid>
    </>
  )
}