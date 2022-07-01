import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './Sobre.css';

export default function Sobre() {
    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item>
                    <h2>Quem somos nós</h2>
                    <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum harum, ducimus sint sunt quidem asperiores rem illo earum debitis quis error nihil. Sit numquam error suscipit nam repellendus totam!
                    Dolorum ea molestias minima, quam odio sint necessitatibus exercitationem laudantium autem nam corrupti officia nesciunt corporis repellendus debitis rem ratione qui ipsum enim aperiam expedita esse? Impedit, nihil dicta! Quod.
                    Commodi, sit optio obcaecati est id labore nulla pariatur molestiae ratione exercitationem dicta quae dolore maiores enim architecto explicabo quo. Rerum asperiores voluptates autem maiores at, facilis est odit optio.</Typography>
                </Grid>
                <Grid>
                    <h2>Quais os nossos objetivos</h2>
                    <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil, quaerat hic aliquid blanditiis repellendus nemo at est soluta vero voluptas, itaque neque nostrum tenetur maxime ea ab rerum tempora!
                    Fuga aliquid aliquam excepturi sequi suscipit doloribus. Quasi aliquid sequi veritatis aperiam vitae delectus molestias dignissimos mollitia, nemo, ipsam sapiente dolor omnis iure nisi, voluptates earum neque quia voluptatem amet!
                    Nulla, doloremque autem totam suscipit maiores dolor, praesentium inventore vel quas, dicta nesciunt numquam quibusdam natus modi error alias non adipisci itaque. Repellat saepe accusantium cumque voluptatum exercitationem culpa quam!</Typography>
                </Grid>
                <Grid>
                    <h2>Como funciona a nossa plataforma?</h2>
                    <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam qui reprehenderit, obcaecati perferendis eos beatae unde commodi, molestias odit tempore deserunt quis totam. Omnis officia qui accusantium ab inventore?
                    Esse, cupiditate! Non odit error cupiditate maxime, aspernatur est, esse soluta reiciendis, eum molestias eveniet voluptates dolorem! Porro architecto delectus magnam, quos quaerat ad et ducimus corporis explicabo! Beatae, consequatur.
                    Voluptatum similique odit dolores beatae? Veritatis voluptatem ea odio consectetur doloribus distinctio eligendi? Corporis facere, esse non similique error suscipit dolorem quasi quidem, autem perspiciatis neque adipisci omnis nam repellendus.</Typography>
                </Grid> 
                <Grid>
                    <h2>Equipe de desenvolvedores</h2>
                    <Grid container xs={12} spacing={3}>
                        <Grid item xs={4} direction='column'>
                            <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 1</h3>
                            </Box>
                            <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 2</h3>
                            </Box>
                        </Grid>

                        <Grid item xs={4} direction='column'>
                            <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 3</h3>
                            </Box>
                            <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 4</h3>
                            </Box>
                        </Grid>

                        <Grid item xs={4} direction='column'>
                        <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 5</h3>
                            </Box>
                            <Box className='cardParticipante'>
                                <img src="https://i.imgur.com/H88yIo2.png" alt="" className='fotoParticipante' />
                                <h3 className='nomeParticipante'>Participante 6</h3>
                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}