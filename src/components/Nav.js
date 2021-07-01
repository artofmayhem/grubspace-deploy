//this component is used to build the navigation bar
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const handleDrawerOpen = () => {
    setState({ left: true });
  };
  const handleDrawerClose = () => {
    setState({ left: false });
  };

  return (
    <>
      <AppBar
        color="primary"
        style={{
          height: "10vh",
          backgroundColor: "#FAFAFA",
          width: "100vw",
        }}
      >
        <div className={'flex flex-row mlfa-rotate-180'}>
          <Button onClick={handleDrawerOpen}>
            <MenuIcon className={"mt-6"} />
          </Button>

          <Link to="/">
            <h1 className={" mt-6 text-black text-4xl"}>Grubspace</h1>
          </Link>
        </div>
      </AppBar>
      <Drawer
        color="primary"
        open={state.left}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.fullList,
        }}
      >
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to={"about"}>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to={"home"}>
              <ListItemText primary="Chef's Manifesto" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to={"recipes"}>
              <ListItemText primary="Recipe Box" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
