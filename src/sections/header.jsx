import React, { useState } from "react";
import images from "../images/logo.png";
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="text-white w-full h-[90px] flex justify-between items-center sticky bg-[#131313]  sm:h-[100px]">
      <div className="w-1/2 flex flex-row items-center">
        <img
          className="w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] lg:h-[120px] lg:w-[120px] object-cover"
          src={images}
        />
        <span className="font-bold sm:text-2xl lg:text-3xl">Social Hitmakers</span>
      </div>
      <div className="hidden lg:pr-12 lg:flex lg:gap-4 ">
        <Link to="about" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">About</Link>
        <Link to="services" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">Services</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="text-white text-xl hover:underline cursor-pointer">Contact</Link>
      </div>
      <div className="lg:hidden "> 
        <Button onClick={handleClick}>
          <MenuIcon sx={{ color: "white", fontSize: '45px'  }}  /> 
        </Button>
        <Drawer anchor="right" open={drawerOpen} onClose={handleClose} > 
          <List>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={<Link to="about" spy={true} smooth={true} duration={500} style={{textDecoration: 'none', color: 'inherit'}}>About</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={<Link to="services" spy={true} smooth={true} duration={500} style={{textDecoration: 'none', color: 'inherit'}}>Services</Link>} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary={<Link to="contact" spy={true} smooth={true} duration={500} style={{textDecoration: 'none', color: 'inherit'}}>Contact</Link>} />
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemIcon><CloseIcon/></ListItemIcon>
              <ListItemText primary="Close" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
