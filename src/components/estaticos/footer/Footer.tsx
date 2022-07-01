import { Box, Grid, Typography } from '@mui/material'
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='texto'>Nosso repositório:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/joaolmb/conectaONG-react" target="_blank">
                                <GitHubIcon className='social' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom className='texto' align="center">ConectaONG</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}