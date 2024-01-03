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
import { LoggedInUser } from "../App";
import { useContext, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteAccount() {
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setLoading(true);
  };

  const handleDeleteAccount = () => {
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    };
    fetch(`https://node-mysql-api-0zxf.onrender.com/users/${userId}`, opts)
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
          <Button
            autoFocus
            sx={{
              color: "#191d3a",
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              "&:hover": {
                backgroundColor: "#f6fafd",
                boxShadow: "none",
                border: "none",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>

          <LoadingButton
            size="small"
            sx={{
              color: "#191d3a",
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              "&:hover": {
                backgroundColor: "#f6fafd",
                boxShadow: "none",
                border: "none",
              },
            }}
            color="primary"
            onClick={() => {
              handleDeleteAccount();
              handleClick();
            }}
            loading={loading}
            loadingPosition="start"
            startIcon={<DeleteIcon />}
            variant="contained"
            type="submit"
          >
            <span>Delete</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
