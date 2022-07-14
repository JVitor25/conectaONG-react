import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/action";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('')
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        senha: "",
        token: "",
    });

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        foto: "",
        senha: "",
        token: "",
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token]);

    useEffect(() => {
        if (respUserLogin.token !== "") {
            // console.log("Token: " + respUserLogin.token)
            // console.log("ID: " + respUserLogin.id)
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))
            navigate('/feed')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`usuarios/logar`, userLogin, setRespUserLogin)
            alert("Usuario logado com sucesso")
        } catch (erro) {
            alert("Dados utilizados inconsistentes. Erro ao logar!")
        }
    }
    return (
        <>
            <Grid container className="container">
                <Grid xs={12} sm={6} container justifyContent="flex-end" alignItems="center">
                    <Box paddingX={20} className="card1">
                        <form onSubmit={onSubmit}>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" className="botao">Logar</Button>
                            </Box>
                        </form>
                        <Box display="flex" justifyContent="center" marginTop={3}>
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant="subtitle1" gutterBottom align="center" className="textos1">Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6} container justifyContent="flex-start" alignItems="center">
                    <Box display="flex" className="card2">
                        <img src="https://i.imgur.com/W5Ym7qV.png" alt="Logo" className="imagem" />
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Login;