import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import User from '../../models/User';
import { buscarId } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokenReducer';
import "./Feed.css";

function Feed() {
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

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
                        <Grid item alignItems="center">
                            <Box sx={{ marginTop: 1 }} justifyContent="center">
                                <AppBar position="sticky" className="appbarLateral">
                                    <Toolbar variant="dense" className="toolbar">
                                        <Box display="flex"  flexDirection="column" justifyContent="center" alignItems="center" p={2}>
                                            <Avatar
                                                //variant="rounded"
                                                alt={user.nome}
                                                src={user.foto}
                                                sx={{ width: 90, height: 90 }}
                                            />
                                            <Typography variant="h6">Olá, {user.nome}</Typography>
                                        </Box>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <AppBar position="sticky" className="appbarLateral">
                                    <Toolbar variant="dense" className="toolbar">
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <ListaPostagem />
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    xs={4}
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
                            <Box sx={{ marginTop: 1, marginLeft: 1 }} position="sticky" >
                                <AppBar position="static" className="appbarLateral">
                                    <Toolbar variant="dense" className="toolbar">
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
