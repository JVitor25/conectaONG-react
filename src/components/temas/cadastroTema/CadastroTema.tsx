import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscarId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { Box, Button } from '@mui/material';
import "./CadastroTema.css"
import { toast } from 'react-toastify';

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: '',
    })

    useEffect(() => {
        if (token === "") {
            toast.warn('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscarId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            tema.postagem = null
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado.', {
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
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado.', {
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

    function back() {
        navigate('/tema')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <Box className="boxCadastroTema" sx={{ background: "white" }}>
                <form onSubmit={onSubmit}>
                    <Typography variant="h4" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                    <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="tema" variant="outlined" name="tema" margin="normal" fullWidth />
                    <Box className="ActionsCadastro">
                        <Button variant="contained" color="error" onClick={back}>
                            Voltar
                        </Button>
                        <Button
                            type="submit" variant="contained" color="success">
                            Finalizar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

export default CadastroTema;