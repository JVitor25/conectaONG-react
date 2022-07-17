import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid, Divider, AppBar, Toolbar } from '@material-ui/core';
import { Box, ButtonBase, Avatar } from '@mui/material'
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { buscar, buscarId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import User from '../../../models/User';
import { Home } from "@mui/icons-material";
import iconeAnuncio from "../../imagens/iconeAnuncio1.png";
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@material-ui/icons';

export default function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert('Hoje não')
      navigate('/login')
    }
  }, [token])

  async function getTema() {
    await buscar("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  const userId = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    postagem: null
  });

  useEffect(() => {
    if (userId !== undefined) {
      findById(userId)
    }
  }, [userId]);

  async function findById(id: string) {
    buscarId(`/usuarios/${userId}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  function goEditar() {
    navigate(`/atualizarusuario/${userId}`)
  }

  function goFeed() {
    navigate(`/feed`)
  }

  return (
    <>
      <Grid container xs={12}>
        <Grid
          item
          container
          direction="row"
          xs={4}
          spacing={3}
        >
          <Grid item xs={4}></Grid>
          <Grid
            item
            container
            xs={8}
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Box>
                <AppBar position="static" className="appbarLateral">
                  <Toolbar variant="dense" className="toolbarUsuario1">
                    <Box display="flex" flexDirection="column" alignItems="center" paddingTop={3} paddingBottom={1}>
                      <Box>
                        <Avatar
                          alt={user.nome}
                          src={user.foto}
                          sx={{ width: 100, height: 100 }}
                        />
                      </Box>
                      <Box sx={{ marginTop: 2, fontWeight: "bold", color: "black" }}>
                        <Typography variant="h6">Olá, {user.nome}.</Typography>
                      </Box>
                      <Box marginTop={1}>
                        <Button variant="outlined" size="small" onClick={goEditar}>Editar perfil</Button>
                      </Box>
                      <Box marginTop={1.5} sx={{ width: "75%" }}><Divider /></Box>
                      <Box marginTop={0.5}>
                        <Button size="small" onClick={goFeed}> <Home className="temaIcon" /> Voltar para home</Button>
                      </Box>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4}
          item
          container
          direction="column"
        >
          <Box className="boxBotaoCriarTema" mx={2} marginTop={2}>
            <Link to={`/formularioTema`} className="text-decorator-noneTema">
              <ButtonBase className="botaoCriarTema">
                <AddIcon />
                Criar Novo Tema
              </ButtonBase>
            </Link>
          </Box>

          <Box mx={2} marginTop={2}> <Divider /> </Box>
          {
            temas.map(tema => (
              <Box alignItems="stretch" mx={2} marginTop={2}>
                <Card variant="outlined" className="CardTema">
                  <CardContent className="ConteudoSuperior">
                    <Box display="flex" flexDirection="row">
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          Tema:
                        </Typography>
                      </Box>
                      <Box paddingLeft={1} fontStyle="italic">
                        <Typography variant="h5" color="textSecondary">
                          {tema.tema}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                  </CardContent>
                  <CardActions className="CardActionsTema">
                    <Box display="flex" justifyContent="space-evenly" sx={{ width: "100%" }} mb={1.5} alignItems="center" >
                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                        <Box>
                          <Button variant="contained" size='small' color="secondary">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            ))
          }
        </Grid>
        <Grid
          item
          container
          direction="row"
          sm={4}
          spacing={3}
        >
          <Grid
            item
            container
            xs={8}
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Box sx={{ marginTop: 1, marginLeft: 1 }}>
                <AppBar position="static" className="appbarLateral">
                  <Toolbar variant="dense" className="toolbarUsuario1">
                    <Box sx={{ color: "black", paddingTop: 1, paddingBottom: 2 }} display="flex" flexDirection="column" p={0.1} alignItems="center">
                      <Box sx={{ fontWeight: "bold" }}>Notícias</Box>

                      <a href='https://brazil.generation.org/2022/06/15/a-generation-foi-classificada-como-uma-das-100-melhores-organizacoes-sociais-do-mundo/'
                        target="_blank"
                        className="text-decoration-noneFeed"
                      >
                        <Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
                          <Box className="botaoMenu">
                            Generation recebe selo como uma das 100 melhores organizações sociais do mundo.
                          </Box>
                          <Box paddingLeft={2}>
                            <img className="imagensNoticias" src="https://media-exp2.licdn.com/dms/image/C4E0BAQGg7aw4I-tmlQ/company-logo_200_200/0/1625690276475?e=2147483647&v=beta&t=NSPXHsvezxPjg4MtE7-sQNDMOAyxcv4Y4eW_rPCHdFE" alt="Imagem do Instituto Ramacrisna" />
                          </Box>
                        </Box>
                      </a>
                      <Box sx={{ width: "100%", margin: 1 }}><Divider /></Box>
                      <a href='https://portalagita.com.br/instituto-ramacrisna-e-eleita-uma-das-melhores-ongs-do-mundo/'
                        target="_blank"
                        className="text-decoration-noneFeed"
                      >
                        <Box display="flex" flexDirection="row" alignItems="center" marginTop={2} >
                          <Box paddingRight={2}>
                            <img className="imagensNoticias" src="https://media-exp1.licdn.com/dms/image/C4E0BAQEPh04MGpKkEg/company-logo_200_200/0/1604087928622?e=2159024400&v=beta&t=d1YM8st7X8_83V_2-oSqEmSuawbP212m8GCDlbS6DZo" alt="Imagem do Instituto Ramacrisna" />
                          </Box>
                          <Box className="botaoMenu">
                            Instituto Ramacrisna é eleita uma das melhores ONGs do mundo.
                          </Box>
                        </Box>
                      </a>
                      <Box sx={{ width: "100%", margin: 1 }}><Divider /></Box>
                      <Link to='/contato' className='text-decorator-none'>
                        <Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
                          <Box className="botaoMenu">
                            Divilgue aqui seus projetos!
                          </Box>
                          <Box paddingLeft={2}>
                            <img className="imagensNoticias" src={iconeAnuncio} alt="Imagem do Instituto Ramacrisna" />
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </>
  );
}