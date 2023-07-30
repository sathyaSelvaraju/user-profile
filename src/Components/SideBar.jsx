import React from "react";
import { Drawer, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = ({ open, onClose }) => {
  return (
    <div style={{marginTop:'200px', padding:'30px' , position:'fixed'}}>
      <List>
        <ListItem button component={Link} to="/home/2" onClick={onClose}>
          <ListItemText primary="PROFILE" style={{ color: "#fff" }} />
        </ListItem>
      </List>
      <Divider style={{ background: "#fff" }} />
      <List>
        <ListItem button component={Link} to="/posts" onClick={onClose}>
          <ListItemText primary="POSTS" style={{ color: "#fff" }} />
        </ListItem>
      </List>
      <Divider style={{ background: "#fff" }} />
      <List>
        <ListItem button component={Link} to="/gallery" onClick={onClose}>
          <ListItemText primary="GALLERY" style={{ color: "#fff" }} />
        </ListItem>
      </List>
      <Divider style={{ background: "#fff" }} />
      <List>
        <ListItem button component={Link} to="/todo" onClick={onClose}>
          <ListItemText primary="TODO" style={{ color: "#fff" }} />
        </ListItem>
      </List>
    </div>
  );
};

export default SideBar;
