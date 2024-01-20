/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { LoggedInUser } from "../../App";
import { useContext } from "react";
import classes from "./Nav.module.css";
import { useMediaQuery } from "@mui/material";
import { loggedOptions, menuOptions, menuItems } from "./menuLists";
import MenuIcon from "@mui/icons-material/Menu";
import { User } from "../../App";
import Avatar from "../Avatar/Avatar";


import LogoMobile from "../Logo/LogoMobile";

const NavBarPhone = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInUser);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = useContext(User);

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.clear();
    navigate(`/`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isPhone = useMediaQuery("(max-width:1200px)");
  if (!isPhone) {
    return null;
  }
  return (
    <div className={classes.mobile}>
      <LogoMobile />
      <Box
        className={classes.icon}
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {loggedIn && (
                      <Avatar photo={user.avatar} />

            )}
            {!loggedIn && (
              <MenuIcon
                sx={{
                  color: "#000000",
                  width: 32,
                  height: 32,
                }}
              />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
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
        {loggedIn && (
          <div>
            {menuItems.map((item) => {
              return (
                <MenuItem
                  key={item.nameTag}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.nameTag}
                </MenuItem>
              );
            })}
          </div>
        )}

        <Divider />
        {menuOptions.map((item) => {
          return (
            <MenuItem
              key={item.nameTag}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.nameTag}
            </MenuItem>
          );
        })}

        {loggedIn && (
          <div>
            {loggedOptions.map((item) => {
              return (
                <MenuItem
                  key={item.nameTag}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.nameTag}
                </MenuItem>
              );
            })}
            <MenuItem onClick={handleLogOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default NavBarPhone;
