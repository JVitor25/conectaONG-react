import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    });

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    });

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    const [value, setValue] = React.useState("pessoaFisica");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item alignItems='center' >
                <Box paddingX={10} marginY={10} className='cardCadastro'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h4' align='center' className="textos1">Cadastrar</Typography>

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
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;