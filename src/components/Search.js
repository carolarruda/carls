/* eslint-disable no-unused-vars */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../App";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgb(22, 26, 33)",
  "&:hover": {
    backgroundColor: "rgba(22, 26, 33, 0.35)",
  },
  marginLeft: 0,
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  color: "#fafafc",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderRadius: "5px",
    color: "#fafafc",
    fontSize: "14px",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "1px solid #eeeeee",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
}));

export default function SearchAppBar({ search, setSearch }) {

  const nav = useNavigate()
  const [searchRecipe, setSearchRecipe] = useContext(SearchContext);

  const handleSearch = (e) => {
    nav('/recipes')
    setSearchRecipe(e.target.value);
 
  };
  return (
    <Toolbar
      sx={{
        backgroundColor: "rgb(22, 26, 33)",
        border: "2px solid transparent",
        boxShadow: "0",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="search…"
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={handleSearch}
    
        />
      </Search>
    </Toolbar>
  );
}
