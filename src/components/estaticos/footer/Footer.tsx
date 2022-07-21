import { Box, Divider } from '@mui/material'
import { Grid, Typography } from '@material-ui/core';
import './Footer.css';
import { Link } from 'react-router-dom';

//Icones
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import { toast } from 'react-toastify';

function ImplementacaoFutura(){
    toast.info('Função ainda não implementada', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

export default function Footer() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' className='footer'>
                <Grid item xs={2}>
                    <h3 className='titulo-footer'>O ConectaONG</h3>
                    <Box className='under-titulo'><Divider/></Box>
                    <Link to="" onClick={ImplementacaoFutura} className='text-decorator-none links-footer'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            FAQ
                        </Typography>
                    </Link>
                    <Link to='/contato' className='text-decorator-none links-footer'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Contato
                        </Typography>
                    </Link>
                    <Link to='/login' className='text-decorator-none links-footer'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Login
                        </Typography>
                    </Link>
                    <Link to='/cadastrousuario' className='text-decorator-none links-footer'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Cadastro
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <h3 className='titulo-footer'>LinkedIn</h3>
                    <Box className='under-titulo'><Divider/></Box>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-lima25/' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            João Vitor Lima
                        </Typography>
                    </a>
                    <a href='https://www.linkedin.com/in/joaolmb/' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            João Lucas Marques
                        </Typography>
                    </a>
                    <a href='https://www.linkedin.com/in/matheus-chaves-amaro-284993239/' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Matheus Chaves Amaro
                        </Typography>
                    </a>
                    <a href='https://www.linkedin.com/in/david-lucas-mendes-92b755231/' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            David Lucas Mendes
                        </Typography>
                    </a>
                    <a href='https://www.linkedin.com/in/gmendeslopes/' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Gabriel Mendes
                        </Typography>
                    </a>
                    <a href='https://github.com/silvoncio' className='text-decorator-none links-footer' target='_blank'>
                        <Typography variant='h6' component='h6' color='inherit'>
                            Silvio Mauricio
                        </Typography>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <h3 className='titulo-footer'>Redes Sociais</h3>
                    <Box className='under-titulo'><Divider/></Box>
                    <Box display="flex" alignItems="center">
                            <a href='' target="_blank">
                                <FacebookIcon className='icons' />
                            </a>
                            <a href='' target="_blank">
                                <InstagramIcon className='icons' />
                            </a>
                            <a href='' target="_blank">
                                <LinkedInIcon className='icons' />
                            </a>
                            <a href='' target='_blank'>
                                <GithubIcon className='github-icon' />
                            </a>
                        </Box>
                </Grid>
            </Grid>
        </>
    );
}