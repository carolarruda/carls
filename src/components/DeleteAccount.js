import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import { useContext } from "react";

export default function DeleteAccount() {

  const [loggedIn, setLoggedIn] = useContext(Context);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAccount = () => {
    console.log("deleting user?");
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    };
    fetch(`http://localhost:4000/users/${userId}`, opts)
      .then((response) => response.json())
      .then((data) => {
        localStorage.clear();
        setLoggedIn(false);
        navigate(`/home`);
      });
  };

  return (
    <div>
      <Button
        variant=""
        onClick={handleClickOpen}
        sx={{
          fontSize: "13px",
          color: "red",
          borderRadius: "20px",
          height: "40px",
          fontWeight: 400,
          fontFamily: "Poppins",
          marginLeft: "20px",
          marginTop: "5px",
          border: "none",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e9f0ff",
          },
        }}
      >
        Delete Account
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"This will permanentely delete your account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDeleteAccount} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
