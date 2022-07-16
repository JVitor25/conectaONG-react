import { AppBar, Button, Checkbox, Divider, FormControl, Grid, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { Avatar, InputLabel, Box, FormHelperText, ButtonBase, Card, CardContent } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import Tema from '../../models/Tema';
import User from '../../models/User';
import { buscar, buscarId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokenReducer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Feed.css";
import { TabContext, TabPanel } from '@material-ui/lab';
import MinhasPostagens from '../../components/postagens/minhasPostagens/MinhasPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import iconeAnuncio from "../../components/imagens/iconeAnuncio.png";
import ReactDOM from 'react-dom';
import App from '../../App';

function Feed() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [tema, setTema] = useState<Tema | any>({
        id: 0,
        tema: '',
        postagem: null
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

    // function back() {
    //     ReactDOM.render(
    //         Feed,
    //         document.getElementById('root')
    //     );
    //     // navigate('/home')
    // }

    // async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //     buscarId(`/tema/${idPostagem}`, setUser, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }
    useEffect(() => {
        console.log(tema)
    }, [tema]);
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
                            <AppBar position="static" className="appbarLateral">
                                <Toolbar variant="dense" className="toolbarUsuario2">
                                    <Box className="boxDaToolBar">
                                        <Button size="small" onClick={() => setValueView("1")} className="botaoMenu">Minhas Postagens</Button>
                                        <Button size="small" onClick={() => setValueView("2")} className="botaoMenu">Explorar</Button>
                                        <Box sx={{ margin: 1 }}> <Divider /></Box>
                                        <Box sx={{ width: "100%" }}>
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
                                                        <MenuItem value={tema.id} onClick={() => setValueView("3")} >
                                                            <Box display="flex" sx={{ maxWidth: 340, whiteSpace: "normal", textAlign: "justify", fontWeight: 500 }} >
                                                                {tema.tema}
                                                            </Box>
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                <FormHelperText sx={{ fontSize: 14 }}>Filtre as postagens por temas </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Box sx={{ margin: 1 }}>
                        <ModalPostagem />
                        <Box sx={{ margin: 1.5 }}> <Divider /></Box>
                        <TabContext value={valueView}>
                            <TabPanel value="1" className="tabPanel">
                                <MinhasPostagens />
                            </TabPanel>
                            <TabPanel value="2" className="tabPanel">
                                <ListaPostagem />
                            </TabPanel>
                            <TabPanel value="3" className="tabPanel">
                                <Grid container direction="column-reverse">
                                    {tema.postagem?.map((post: any) => (
                                        <Box>
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
                                                                <Box display="flex" justifyContent="space-between" sx={{ paddingTop: 1, fontStyle: "italic", fontWeight: "bold" }}>Tema: {tema.tema}
                                                                    <Checkbox icon={<FavoriteBorderIcon color="error" />} checkedIcon={< FavoriteIcon color="error" />} />
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box >
                                    ))}
                                </Grid >
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Grid >
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
            </Grid >
        </>
    )
}

export default Feed;