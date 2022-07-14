import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';

function Feed() {
    return (
        <>
            <Grid container xs={12}>
                <Grid xs={3}>
                </Grid>
                <Grid xs={6}>
                    <ListaPostagem />
                </Grid>
                <Grid xs={3}>
                </Grid>
            </Grid>
        </>
    )
}

export default Feed;