/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Context } from "../App";
import { useContext } from "react";
import { styled } from "@mui/material/styles";

export default function AccountMenu() {
  const useStyles = styled((Menu) => ({
    padding: "0px",
  }));
  
  const [loggedIn, setLoggedIn] = useContext(Context);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.clear();
    navigate(`/`);
  };

  const handleNewRecipe = () => {
    navigate("/add");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoSettings = () => {
    navigate("/settings");
  };

  const handleRecipesP = () => {
    navigate("/myrecipes");
  };
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup=""
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  backgroundColor: "#eeeeee",
                  color: "#161a21",
                }}
              >
                {username[0] || ""}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          className={classes.overrideStyle}
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: "#fafafc",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
              },
            },
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleRecipesP}>
            <Avatar /> My recipes
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleNewRecipe}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            Add a new recipe
          </MenuItem>
          <MenuItem onClick={handleNewRecipe}>
            <ListItemIcon>
              <FavoriteIcon fontSize="small" />
            </ListItemIcon>
            Favorites
          </MenuItem>
          <MenuItem onClick={handleGoSettings}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}
