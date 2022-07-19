import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import './Contato.css';
import { Box } from '@mui/material';

function Contato() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center'>
                <Box paddingX={10} marginY={10} className='cardContato'>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Contato</Typography>
                        <TextField id='nome' label='Nome' variant='standard' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='Email' variant='standard' name='email' margin='normal' fullWidth />
                        <TextField id='assunto' label='Assunto' variant='standard' name='assunto' margin='normal' fullWidth />
                        <TextField id='mensagem' label='Mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth multiline rows={5}/>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );

}

export default Contato;