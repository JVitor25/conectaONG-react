import { Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import User from "../../../models/User";
import { buscar, buscarId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import ReactDOM from 'react-dom';
import { Box, Button } from "@mui/material";
import "./CadastroPost.css";
import { toast } from "react-toastify";

export default function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    const userId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: ''
    });

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        mensagem: '',
        data: '',
        contato: "",
        tema: null,
        usuario: null
    });

    const [usuario, setUsuario] = useState<User>({
        id: +userId,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    });

    useEffect(() => {
        if (token === "") {
            toast.info('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: usuario
        })
    }, [tema]);

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id]);

    async function getTemas() {
        await buscar("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscarId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(postagem)
        if (postagem.tema?.tema === "" || tema.tema==="") {
            toast.warn('Por favor, insira um tema.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            if (id !== undefined) {
                put(`/postagem`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Postagem atualizada com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            } else {
                post(`/postagem`, postagem, setPostagem, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Postagem cadastrada.', {
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
            back()
        }
    }

    let rota = useLocation();

    function back() {
        if (rota.pathname === "/feed") {
            navigate('/feed2')
        } else if (rota.pathname === "/feed2") {
            navigate('/feed')
        } else {
            navigate('/feed')
        }
    }

    var formulario;
    if (rota.pathname === "/feed" || rota.pathname === "/feed2") {
        formulario = <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">
                    Formulário de cadastro de Postagem
                </Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" name="titulo" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.mensagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="mensagem" label="mensagem" name="mensagem" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.contato} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="contato" label="contato" name="contato" variant="outlined" margin="normal" fullWidth />

                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscarId(`/tema/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.tema}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Box className="ActionsCadastro">
                        <Button variant="contained" color="error" onClick={back}>
                            Voltar
                        </Button>
                        <Button
                            type="submit" variant="contained" color="success">
                            Finalizar
                        </Button>
                    </Box>
                </FormControl>
            </form>
        </Container>
    } else {

        formulario = <Container maxWidth="sm" className="topo">
            <Box className="boxCadastroPostagem" sx={{ background: "white" }}>
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center">
                        Formulário de cadastro de Postagem
                    </Typography>
                    <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" name="titulo" variant="outlined" margin="normal" fullWidth />
                    <TextField value={postagem.mensagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="mensagem" label="mensagem" name="mensagem" variant="outlined" margin="normal" fullWidth />
                    <TextField value={postagem.contato} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="contato" label="contato" name="contato" variant="outlined" margin="normal" fullWidth />

                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => buscarId(`/tema/${e.target.value}`, setTema, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                temas.map(tema => (
                                    <MenuItem value={tema.id}>{tema.tema}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                        <Box className="ActionsCadastro">
                            <Button variant="contained" color="error" onClick={back}>
                                Voltar
                            </Button>
                            <Button
                                type="submit" variant="contained" color="success">
                                Finalizar
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            </Box>
        </Container>

    }

    return (
        <>
            {formulario}
        </>
    )

}