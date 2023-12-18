import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Settings from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";

export const menuItems = [
  {
    nameTag: "Profile",
    icon: <Avatar />,
    path: "/settings",
  },
  {
    nameTag: "My recipes",
    icon: <Avatar />,
    path: "/myrecipes",
  },
];

export const menuOptions = [
  {
    nameTag: "Home",
    icon: <HomeIcon fontSize="small" />,
    path: "/",
  },
  {
    nameTag: "Recipes",
    icon: <CollectionsIcon fontSize="small" />,
    path: "/recipes",
  },
  {
    nameTag: "About",
    icon: <InfoIcon fontSize="small" />,
    path: "/",
  },
  {
    nameTag: "Blog",
    icon: <BookIcon fontSize="small" />,
    path: "/blog",
  },
];

export const loggedOptions = [
  {
    nameTag: "Add recipe",
    icon: <AddIcon fontSize="small" />,
    path: "/add",
  },
  {
    nameTag: "Favorites",
    icon: <FavoriteIcon fontSize="small" />,
    path: "/",
  },
  {
    nameTag: "Settings",
    icon: <Settings fontSize="small" />,
    path: "/settings",
  },
];
