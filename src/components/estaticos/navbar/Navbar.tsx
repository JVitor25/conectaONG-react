import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" className='toolbar'>
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit" className='fonte'>
                            ConectaONG
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" >
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Posts
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}