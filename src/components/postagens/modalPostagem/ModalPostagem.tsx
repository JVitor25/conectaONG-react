import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Avatar, Box, ButtonBase, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import CadastroPost from "../cadastroPost/CadastroPost";
import CloseIcon from '@material-ui/icons/Close';
import "./ModalPostagem.css";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import User from "../../../models/User";
import { buscarId } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { toast } from "react-toastify";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalPostagem() {
  let navigate = useNavigate();

  function editTemas() {
    navigate(`/tema`)
  }
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const userId = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    postagem: null
  });

  useEffect(() => {
    if (userId !== undefined) {
      findById(userId)
    }
  }, [user]);

  async function findById(id: string) {
    buscarId(`/usuarios/${userId}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle}
      className={classes.paper}
    >
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose} />
      </Box>
      <CadastroPost />
    </div>
  );

  function ImplementacaoFutura(){
    toast.info('Função ainda não implementada', {
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

  return (
    <div>
      <Box className="boxCriarPostagem">
        <Grid
          container
          direction="column"
          alignItems="stretch"
          spacing={3}
          xs={12}
        >
          <Grid
            item
            container
            direction="row"
          >
            <Grid
              item
              container
              justifyContent="center"
              xs={2}>
              <Avatar
                alt={user.nome}
                src={user.foto}
                sx={{ width: 45, height: 45 }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="stretch"
              xs>
              <ButtonBase
                className="btnModal"
                onClick={handleOpen}>

                <Box className="boxModalPostagem">
                  Publicar postagem
                </Box>
              </ButtonBase>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
          >
            <Grid
              item
              container
              justifyContent="center"
              xs={3}>
              <ButtonBase className="botaoDaPostagem" onClick={ImplementacaoFutura}>
                <WallpaperIcon fontSize="medium" />
                Foto
              </ButtonBase>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              xs={2}>
              <ButtonBase className="botaoDaPostagem" onClick={ImplementacaoFutura}>
                <YouTubeIcon fontSize="medium" />
                Video
              </ButtonBase>
            </Grid>

            <Grid
              item
              container
              justifyContent="center"
              xs={3}>
              <ButtonBase className="botaoDaPostagem" onClick={ImplementacaoFutura}>
                <AddReactionIcon fontSize="medium" />
                Reação
              </ButtonBase>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              xs={4}>

              <ButtonBase onClick={editTemas} className="botaoDaPostagem" >
                <LibraryBooksIcon className="modalIcon" />
                Gerenciar Temas
              </ButtonBase>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </div >
  );
}

export default ModalPostagem;