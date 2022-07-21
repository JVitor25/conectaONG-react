import React from 'react';
import './Sobre.css';
import PaginaInicial from '../paginaInicial/PaginaInicial';
// Componentes react:
import { Grid,  Typography } from "@material-ui/core";
import { Box, Paper } from "@mui/material";

// Icones:
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

// Imagens:
import joaoLima from '../../components/imagens/joaoLima.png';
import david from '../../components/imagens/david.png';
import gabriel from '../../components/imagens/gabriel.png';
import silvio from '../../components/imagens/silvio.png';
import humanos from '../../components/imagens/conversa.png';
import joaoLucas from '../../components/imagens/joaoLucas.png';
import mulher from '../../components/imagens/mulher.png';
import mui from '../../components/imagens/mui.png';
import react from '../../components/imagens/react.png';
import java from '../../components/imagens/JAVA.png';
import spring from '../../components/imagens/SPRINGBOOT.png';
import matheus from '../../components/imagens/matheus.png';
import valores from '../../components/imagens/valores.png';
import missao from '../../components/imagens/missao.png';
import visao from '../../components/imagens/visao.png';
import conecta from '../../components/imagens/conecta.png';
export default function Sobre() {
    return (
        <>
            <Grid container xs={12}>

{/* Título da página */}
<Grid container xs={12} id="inicio">
    <Paper className="bg-titulo">
        <Grid item xs={5}>
        <Box display="flex" className="cardlogo">
        <img src={conecta} alt="Logo" className="logo" />
    </Box>

        </Grid>
        <Grid item xs={7}>
            <Typography className="titulo-pagina">
                Quem somos?
            </Typography>
            <Typography className="texto">
                A alta desigualdade na distribuição de renda no Brasil é um problema que aflige grande parte da população. Este fator se torna muito visível quando analisamos o coeficiente de Gini - indice utilizado para aferir a desigualdade econômica de um determinado local. De acordo com o último levantamento desse indice realizado em 2019, o Brasil encontra-se na 9ª colocação mundial integralizando o grupo de países que possuem maiores desigualdades e concentrações de renda.
            </Typography>
        </Grid>
    </Paper>
</Grid>

{/* Infos sobre a ConectaONG */}
<Grid container xs={12} spacing={5} className="grid-info">

    <Grid item md={6} xs={12}>
        <Typography className="texto">
            Por isso temos como base a <a href="">ODS - 10 (Redução das Desigualdades)</a>  Acreditamos que essa ODS tenha um papel realmente significativo no país, até porque as desigualdades socioeconômicas não são as únicas que enfrentamos. Atualmente ainda é muito visível preconceitos raciais, regionais e de gênero, muitos deles estruturados na nossa sociedade desde seu princípio e isso manifesta desacordo com o artigo 1 da Declaração Universal dos Direitos Humanos: "Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espirito de fraternidade".

        </Typography>
    </Grid>

    <Grid item md={6} xs={12}>
        <img src={mulher} alt="" className="imagem-info" />
    </Grid>

    <Grid item md={6} xs={12}>
        <img src={humanos} alt="" className="imagem-info" />
    </Grid>
    <Grid item md={6} xs={12}>
        <Typography className="texto">
            A melhor maneira de combater essas desigualdades é auxiliar de alguma maneira as diversas ONGs já trabalham com esse intuito. Por isso decidimos criar a ConectaONG, uma rede social que visa divulgar o trabalho dessas instituições que muitas vezes não são conhecidas e garantir maior visibilidade para essas causas. Como? Criamos uma plataforma onde as ONGs, ou representantes das mesmas podem fazer um cadastro apresentando seus objetivos, projetos, integrantes, e uma forma de contato para que pessoas físicas e jurídicas possam colaborar de alguma maneira. De tal modo a possibilitar interação entre usuários e ONGs.
        </Typography>
    </Grid>
</Grid>

{/* Valores */}
<Grid container md={12} className="valores">
    <Grid item md={12} id="pilares">
        <Typography className="subtitulos"  >Nossos Pilares</Typography>
    </Grid>
    <Grid item md={3} className="cartao-valores" >
        <Typography className="nome-valor">
            Visão
        </Typography>
        <Box>
            <img src={visao} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="txt-valores">
            Diminuir a desigualdade no Brasil através do auxilio a visibilidade de ONG's
        </Typography>
    </Grid>
    <Grid item md={3} className="cartao-valores" >
        <Typography className="nome-valor">
            Missão
        </Typography>
        <Box>
            <img src={missao} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="txt-valores">
            Criar um ambiente que facilite o encontro entre pessoas e ONG's, além de facilitar também o contato das instituições com possíveis empresas parceiras.
        </Typography>
    </Grid>
    <Grid item md={3} className="cartao-valores" >
        <Typography className="nome-valor">
            Valores
        </Typography>
        <Box>
            <img src={valores} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="txt-valores">
            Honestidade, colaboração, noção de comunidade, trabalho em equipe, respeito, solidariedade e inclusão.
        </Typography>
    </Grid>
</Grid>

{/* Tecnologias utilizadas */}
<Grid container md={12} className="tecnologias">
    <Grid item xs={12} id="tecnologias" >
        <Typography className="subtitulos" >
            Tecnologias utilizadas:
        </Typography>
    </Grid>
    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
        <Typography className="nome-tecnologia">
            JAVA
        </Typography>
        <Box>
            <img src={java} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="texto-time">
            Java é uma linguagem de programação e plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995. De um início humilde, ela evoluiu para uma grande participação no mundo digital dos dias atuais, oferecendo a plataforma confiável na qual muitos serviços e aplicativos são desenvolvidos.
        </Typography>
    </Grid>
    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
        <Typography className="nome-tecnologia">
            Spring Boot
        </Typography>
        <Box>
            <img src={spring} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="texto-time">
            O Spring é um framework open source para a plataforma Java criado por Rod Johnson e descrito em seu livro "Expert One-on-One: JEE Design e Development". Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle e injeção de dependência.
        </Typography>
    </Grid>
    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
        <Typography className="nome-tecnologia">
            React.js
        </Typography>
        <Box>
            <img src={react} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="texto-time">
            É uma biblioteca JavaScript para criação de interfaces para o usuário, desenvolvida e mantida pelo Facebook, sua primeira release saiu em 2013. Conta com mais de mil colaboradores ativos no GitHub. Ele está presente no nosso dia-a-dia em empresas grandes como Facebook, Instagram, AirBnB, NFL, Yahoo e muito mais.
        </Typography>
    </Grid>
    <Grid item xs={12} md={4} xl={2} className="cartao-tecnologia" >
        <Typography className="nome-tecnologia">
            Material UI
        </Typography>
        <Box>
            <img src={mui} alt="" className="foto-tecnologia zoom" />
        </Box>
        <Typography className="texto-time">
            Uma das populares bibliotecas de componentes React. Considerada por muitos como a melhor biblioteca de uso geral do mercado. Ela segue as diretrizes, componentes e ferramentas de 'material design' do Google para tornar os aplicativos da web mais rápidos.
        </Typography>
    </Grid>

</Grid>

{/* Time */}
<Grid container md={12} className="time-info" id="equipe">
    <Grid item md={12} id="equipe">
        <Typography className="subtitulos">Nossa equipe:</Typography>
    </Grid>


    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={david} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                David Mendes
            </Typography>
        </Box>

        <Typography className="texto-time">
            Sempre acreditei que melhorar o meio que se está inserido é uma das coisas mais grandiosas que podemos fazer, fico feliz de usar a tecnologia a favor disso.
        </Typography>

        <Box className="box">
            <a href="https://github.com/davidlucas25" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/david-lucas-mendes-92b755231/" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={gabriel} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                Gabriel Mendes
            </Typography>
        </Box>

        <Typography className="texto-time">
            Recifense, apaixonado pela ciência e tecnologia, com formação técnica em Redes de Computadores e desenvolvedor Full Stack Java Jr.
        </Typography>
        <Box className="box">
            <a href="https://github.com/GabrielMendes94" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/gmendeslopes/" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={joaoLucas} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                João Marques
            </Typography>
        </Box>

        <Typography className="texto-time">
            Mineiro, 20 anos e um nerd apaixonado por tecnologia. Sei que minhas pequenas ações podem contribuir para um mundo melhor e pretendo fazer isso através da tecnologia e educação.
        </Typography>
        <Box className="box">
            <a href="https://github.com/joaolmb" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/joaolmb/" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={joaoLima} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                João Lima
            </Typography>
        </Box>

        <Typography className="texto-time">
            Um mineiro de 19 anos apaixonado por matemática e resoluções de problemas. Me identifico muito o segmento de indústria de área de tecnologia e por isso eu sei que posso agregar muito ao mundo Tech.
        </Typography>
        <Box className="box">
            <a href="https://github.com/JVitor25" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-lima25/" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={matheus} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                Matheus Chaves
            </Typography>
        </Box>

        <Typography className="texto-time">
            Apaixonado por ciência e tecnologia. Acumulador compulsivo de FPS e cores no monitor.
            Desafiando a realidade do universo sendo Nerd, K-popper e crossfiteiro simultaneamente.
        </Typography>
        <Box className="box">
            <a href="https://github.com/xMoogle" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/matheus-chaves-amaro-284993239/" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
    <Grid item md={2} className="cartao-time" >
        <Box>
            <img src={silvio} alt="" className="foto-time zoom" />
            <Typography className="nome-time">
                Silvio Mauricio
            </Typography>
        </Box>

        <Typography className="texto-time">
            Sou um jovem pernambucano que cursa Engenharia Civil, mas perdidamente apaixonado pela tecnologia e que está em transição de carreira adentrando nesse mundão do desenvolvimento.
        </Typography>
        <Box className="box">
            <a href="https://github.com/silvoncio" target='blank'><GithubIcon className="github-icone zoom" /></a>
            <a href="https://www.linkedin.com/in/silvio-mauricio-da-silva-junior-b30944244" target='blank'><LinkedInIcon className="icones zoom" /></a>
        </Box>
    </Grid>
</Grid>
</Grid>
        </>
    );
}