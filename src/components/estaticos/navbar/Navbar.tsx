import { ChangeEvent, useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import './Navbar.css'
import { AccountCircle } from '@material-ui/icons';


export default function Navbar() {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="fixed" className="appbar">
                <Toolbar variant="dense" className='toolbar'>
                    <Link to="/home">
                        <Box className='cursor' >
                            <img src="https://i.imgur.com/d0N3FeY.png " alt="Nome Horizontal" className="nomeHorizontal" />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start" >
                        <Link to="/home" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

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
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to="/sobre" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sobre Nós
                                </Typography>
                            </Box>
                        </Link>

                        {auth && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link to='/login' className="menuIcone">
                                            <Typography variant="h6" color="inherit">
                                                Logout
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}