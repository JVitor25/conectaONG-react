import { AppBar, Button, Divider, FormControl, Grid, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { Avatar, InputLabel, Box, FormHelperText } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import Tema from '../../models/Tema';
import User from '../../models/User';
import { buscar, buscarId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokenReducer';
import "./Feed.css";
import { TabContext, TabPanel } from '@material-ui/lab';
import MinhasPostagens from '../../components/postagens/minhasPostagens/MinhasPostagens';

function Feed() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: ''
    });
    const [valueView, setValueView] = useState('2')
    // const { id } = useParams<{ id: string }>();
    const [filtroPostagem, setFiltroPostagem] = useState()
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

    // function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    //     setValue(newValue);
    // }
    
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
    // async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //     buscarId(`/tema/${idPostagem}`, setUser, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    return (
        <>
            <Grid container xs={12}>
                <Grid
                    item
                    container
                    direction="row"
                    sm={4}
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
                                        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
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
                                        </Box>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </Grid>
                        <Grid item className="gridUsuario" >
                            <Box className="cardUsuario2">
                                <AppBar position="static" className="appbarLateral">
                                    <Toolbar variant="dense" className="toolbarUsuario2">
                                        <Box className="boxDaToolBar">
                                            <Button size="small" onClick={() => setValueView("1")} className="botaoMenu">Minhas Postagens</Button>
                                            <Button size="small" onClick={() => setValueView("2")} className="botaoMenu">Explorar</Button>
                                            {/* <Button size="small" className="botaoMenu">Temas:</Button> */}
                                            <Box sx={{ margin: 1 }}> <Divider /></Box>
                                            {/* {temas.map(tema => ( 
                                                <form onSubmit={onSubmit}>
                                                <Button onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} type="submit" size="small" onClick={() => setValueView("3")} className="botaoMenu">
                                                    {tema.tema}
                                                </Button>
                                                <Button size="small" onClick={() => setValueView("3")} className="botaoMenu">
                                                    {tema.tema}
                                                </Button>*/}
                                            <Box className="boxTemas">
                                                <FormControl fullWidth variant="standard" >
                                                    <InputLabel sx={{ fontSize: 14 }} id="demo-simple-select-helper-label">Temas:</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        onChange={(e) => buscarId(`/tema/${e.target.value}`, setTema, {
                                                            headers: {
                                                                'Authorization': token
                                                            }
                                                        })}>
                                                        {temas.map(tema => (
                                                            <MenuItem value={tema.id} onClick={() => setValueView("2")} >
                                                                <Box display="flex" sx={{ maxWidth: 340, whiteSpace: "normal", textAlign: "justify", fontWeight: 500}} >
                                                                    {tema.tema}
                                                                </Box>
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                    <FormHelperText sx={{ fontSize: 14 }}>Filtre as postagens por temas </FormHelperText>
                                                </FormControl>
                                            </Box>
                                            {/* </form>

                                             ))} */}
                                        </Box>
                                        {/* <Box sx={{ fontSize: 18, borderTopStyle: "double", p: 1 }}>
                                            <Link to="/tema" className="text-decoration-none">
                                                <Box sx={{ color: "black" }}>
                                                    <Typography>
                                                        Gerenciar Temas
                                                    </Typography>
                                                </Box>
                                            </Link>
                                        </Box> */}
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <TabContext value={valueView}>
                        <TabPanel value="1" className="tabPanel">
                            <MinhasPostagens />
                        </TabPanel>
                        <TabPanel value="2" className="tabPanel">
                            <ListaPostagem />
                        </TabPanel>
                        <TabPanel value="3" className="tabPanel">

                        </TabPanel>
                    </TabContext>
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
    )
}

export default Feed;