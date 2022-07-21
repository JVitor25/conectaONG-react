import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import User from '../../models/User';
import { buscarId, put } from '../../services/Service';
import { TokenState } from '../../store/tokens/tokenReducer';
import "./AtualizarUsuario.css";
import { toast } from 'react-toastify';

function AtualizarUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    });

    useEffect(() => {
        if (token === "") {
            toast.info('Você precisa estar logado.', {
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
    }, [id]);

    async function findById(id: string) {
        buscarId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.senha === "" || user.nome === "" || user.usuario === "") {
            toast.warn('Possui campos vazios', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        } else if (user.usuario.includes("@") === false || user.usuario.includes(".com") === false) {
            toast.warn('Formato esperado no campo e-mail: email@email.com', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
        } else if (user.foto.length >= 255) {
            toast.warn('O link da foto deve ter menos que 255 caracteres.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        } else if (user.senha.length < 8) {
            toast.warn('A senha deve conter ao menos 8 digitos', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        } else if (confirmarSenha === user.senha) {
            user.postagem = null
            put(`/usuarios/atualizar`, user, setUser, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Usuário atualizado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            navigate("/feed")
        } else {
            toast.warn('As senhas não coincidem.', {
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
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const [value, setValue] = React.useState("pessoaFisica");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item alignItems='center' >
                    <Box paddingX={10} marginY={10} className='cardCadastro'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h4' align='center' className="textos1">Editar Perfil</Typography>

                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Link da Foto' variant='outlined' name='foto' margin='normal' fullWidth />

                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <Box marginTop={2}>
                                <FormControl component="fieldset">
                                    <Typography variant="h6" color="inherit">Selecione um tipo de Usuário:</Typography>
                                    <RadioGroup aria-label="tipoPessoa" name="tipoPessoa" value={value} onChange={handleChange}>
                                        <FormControlLabel value="pessoaFisica" control={<Radio color="primary" />} label="Pessoa Física" />
                                        <FormControlLabel value="pessoaJuridica" control={<Radio color="primary" />} label="Pessoa Jurídica" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box marginTop={2} textAlign='center'>
                                <Link to="/feed" className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                    Atualizar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AtualizarUsuario;