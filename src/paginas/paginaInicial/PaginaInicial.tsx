// Componentes react:
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { Box, Paper, Slider } from "@mui/material";
import { Link } from "react-router-dom";

// Icones:
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

// Imagens:
import joaoLima from '../../components/imagens/joaoLima.png';
import humanos from '../../components/imagens/humanos.png';

// CSS:
import "./PaginaInicial.css";

export default function PaginaInicial() {

    return (
        <>
            <AppBar position="sticky" className="appbar">
                <Toolbar variant="dense" className="toolbar">
                    <Link to="/home">
                        <Box className="cursor" >
                            <img src="https://i.imgur.com/H31Qdmr.png" alt="Nome Horizontal" className="nomeHorizontal" />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start" >
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Ínicio
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Quem somos?
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Nossos valores
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Tecnologias
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Equipe
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/login" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Entrar
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/cadastrousuario" className="text-decoration-none">
                            <Box mx={1.5} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastre-se
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Container Geral */}
            <Grid container xs={12}>

                {/* Título da página */}
                <Grid container xs={12}>
                    <Paper className="bg-titulo">
                        <Grid item xs={5}>
                            <Typography className="titulo-pagina">
                                Quem somos?
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography className="texto">
                                A ConectaONG é a rede social que tem como objetivo combater as desigualdades por meio do auxilio à Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus maiores sint voluptates, non dolores repellat laboriosam, voluptatibus quasi ut cupiditate nostrum qui asperiores ipsam. Consectetur cupiditate temporibus modi sed.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Infos sobre a ConectaONG */}
                <Grid container xs={12} spacing={5} className="grid-info">
                    <Grid item xs={12}></Grid>
                    <Grid item md={6}>
                        <Typography className="text-info">
                            A alta desigualdade na distribuição de renda no Brasil é um problema que aflige grande parte da população. Este fator se torna muito visível quando analisamos o coeficiente de Gini - indice utilizado para aferir a desigualdade econômica de um determinado local. De acordo com o último levantamento desse indice realizado em 2019, o Brasil encontra-se na 9ª colocação mundial integralizando o grupo de países que possuem maiores desigualdades e concentrações de renda. Tendo em vista esse cenário, nosso grupo escolheu o Objetivo de Desenvolvimento Sustentável (ODS) 10: Redução as desigualdades.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={humanos} alt="" className="imagem-info" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src="https://images.pexels.com/photos/12739401/pexels-photo-12739401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagem-info" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography>
                            Acreditamos que essa ODS tenha um papel realmente significativo no país, até porque as desigualdades socioeconômicas não são as únicas que enfrentamos. Atualmente ainda é muito visível preconceitos raciais, regionais e de gênero, muitos deles estruturados na nossa sociedade desde o início de nossa colonização. E isso manifesta desacordo com o artigo 1 da Declaração Universal dos Direitos Humanos: "Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espirito de fraternidade".

                        </Typography>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Typography>
                            Objetivo do ConectaONG:
                            Dessa forma decidimos em conjunto que a melhor maneira de combater essas desigualdades seria auxiliar de alguma maneira as diversas ONGs já trabalham com esse intuito. Por isso decidimos criar a ConectaONG, uma rede social que visa divulgar o trabalho dessas instituições que muitas vezes não são conhecidas e garantir maior visibilidade para essas causas.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src="https://images.pexels.com/photos/12739401/pexels-photo-12739401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagem-info" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src="https://images.pexels.com/photos/12739401/pexels-photo-12739401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagem-info" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography>
                            Como:
                            Temos a ideia de criar uma plataforma onde as ONGs, ou representantes das mesmas fizessem um cadastro apresentando seus objetivos, projetos, integrantes, e uma forma de contato para que pessoas físicas e jurídicas possam colaborar de alguma maneira. De tal modo a possibilitar interação entre usuários e ONGs.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Valores */}
                <Grid container md={12} className="valores">
                    <Grid item md={12}>
                        <Typography className="subtitulos">Nossos Valores</Typography>
                    </Grid>
                    <Grid item md={3} className="cartao-valores" >
                        <Typography className="nome-valor">
                            Valores?
                        </Typography>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            é uma boa pergunta
                        </Typography>
                    </Grid>
                    <Grid item md={3} className="cartao-valores" >
                        <Typography className="nome-valor">
                            Eu realmente não sei
                        </Typography>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            o que poderiamos
                        </Typography>
                    </Grid>
                    <Grid item md={3} className="cartao-valores" >
                        <Typography className="nome-valor">
                            colocar
                        </Typography>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            nesse tópico
                        </Typography>
                    </Grid>
                </Grid>

                {/* Tecnologias utilizadas */}
                <Grid container md={12} className="tecnologias">
                    <Grid item xs={12}>
                        <Typography className="subtitulos">
                            Tecnologias utilizadas:
                        </Typography>
                    </Grid>
                    <Grid item  xs={12} md={4} xl={2} className="cartao-tecnologia" >
                        <Typography className="nome-tecnologia">
                            JAVA
                        </Typography>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            Java é uma linguagem de programação e plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995. De um início humilde, ela evoluiu para uma grande participação no mundo digital dos dias atuais, oferecendo a plataforma confiável na qual muitos serviços e aplicativos são desenvolvidos.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
                        <Typography className="nome-tecnologia">
                            Spring Boot
                        </Typography>
                        <Box>
                            {/* A imagem na verdade é do Spring Boot */}
                            <img src="https://devkico.itexto.com.br/wp-content/uploads/2014/08/spring-boot-project-logo.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE Design e Development". Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle e injeção de dependência.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
                        <Typography className="nome-tecnologia">
                            React.js
                        </Typography>
                        <Box>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            É uma biblioteca JavaScript para criação de interfaces para o usuário, desenvolvida e mantida pelo Facebook, sua primeira release saiu em 2013. Conta com mais de mil colaboradores ativos no GitHub. Ele está presente no nosso dia-a-dia em empresas grandes como Facebook, Instagram, AirBnB, NFL, Yahoo e muito mais.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
                        <Typography className="nome-tecnologia">
                            Material UI
                        </Typography>
                        <Box>
                            <img src="https://mui.com/static/logo.png" alt="" className="foto-tecnologia zoom" />
                        </Box>
                        <Typography>
                            Uma das populares bibliotecas de componentes React. Considerada por muitos como a melhor biblioteca de uso geral do mercado. Ela segue as diretrizes, componentes e ferramentas de 'material design' do Google para tornar os aplicativos da web mais rápidos.
                        </Typography>
                    </Grid>

                </Grid>

                {/* Time */}
                <Grid container md={12} className="time-info">
                    <Grid item md={12}>
                        <Typography className="subtitulos">Nosso time:</Typography>
                    </Grid>


                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src="https://avatars.githubusercontent.com/u/100104721?v=4" alt="" className="foto-time zoom" />
                            <Typography className="nome-time">
                                David Mendes
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>

                        <Box className="box">
                            <a href="https://github.com/davidlucas25" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="https://www.linkedin.com/in/david-lucas-mendes-92b755231/" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src="https://avatars.githubusercontent.com/u/103916287?v=4" alt="" className="foto-time zoom" />
                            <Typography className="nome-time">
                                Gabriel Mendes
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi
                        </Typography>
                        <Box className="box">
                            <a href="https://github.com/GabrielMendes94" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="https://www.linkedin.com/in/gmendeslopes/" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src="https://avatars.githubusercontent.com/u/97589444?v=4" alt="" className="foto-time zoom" />
                            <Typography className="nome-time">
                                João Marques
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi
                        </Typography>
                        <Box className="box">
                            <a href="https://github.com/joaolmb" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="https://www.linkedin.com/in/joaolmb/" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src={joaoLima} alt="" className="foto-time zoom"/>
                            {/* <img src="https://avatars.githubusercontent.com/u/100228980?v=4" alt="" className="foto-time zoom" /> */}
                            <Typography className="nome-time">
                                João Lima
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi
                        </Typography>
                        <Box className="box">
                            <a href="https://github.com/JVitor25" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-lima25/" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src="https://c.tenor.com/nEsdZ0qa6QcAAAAd/dog.gif" alt="" className="foto-time zoom" />
                            <Typography className="nome-time">
                                Matheus Chaves
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi
                        </Typography>
                        <Box className="box">
                            <a href="https://github.com/xMoogle" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="https://www.linkedin.com/in/matheus-chaves-amaro-284993239/" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                    <Grid item md={2} className="cartao-time" >
                        <Box>
                            <img src="https://pbs.twimg.com/media/E2k9NyhXoAYfF_g.jpg" alt="" className="foto-time zoom" />
                            <Typography className="nome-time">
                                Silvoncio
                            </Typography>
                        </Box>

                        <Typography className="texto-time">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit tempora excepturi impedit optio, eligendi
                        </Typography>
                        <Box className="box">
                            <a href="https://github.com/silvoncio" target='blank'><GithubIcon className="github-icone zoom" /></a>
                            <a href="" target='blank'><LinkedInIcon className="icones zoom" /></a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}