import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import Context from "../context";
import Signout from "../components/Auth/Signout";

const Header = ({ classes }) => {
  const [sidez, setSidez] = React.useState({ left: false });
  const { state } = useContext(Context);
  const { currentUser } = state;

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidez({ ...sidez, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key={"name"}>
          {/* Current User Info */}
          {currentUser && (
            <div className={classes.grow}>
              <img
                className={classes.picture}
                src={currentUser.picture}
                alt={currentUser.name}
              />
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.userName}
              >
                {currentUser.name}
              </Typography>
            </div>
          )}
        </ListItem>
      </List>
      <Divider />
      {/* Signout Button */}
      <Signout />
    </div>
  );

  return (
    <>
      <Fab
        edge="start"
        className={classes.menuFab}
        color="inherit"
        aria-label="menu"
        aria-haspopup="true"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </Fab>
      <Drawer open={sidez.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </>
  );
};

const styles = theme => ({
  list: {
    width: 250
  },
  menuFab: {
    position: "absolute",
    zIndex: 2,
    width: "40px",
    height: "40px",
    top: "12px",
    left: "11px",
    background: "white"
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: "green",
    fontSize: 45
  },
  mobile: {
    display: "none"
  },
  picture: {
    height: "50px",
    borderRadius: "90%",
    marginRight: theme.spacing.unit * 2
  },
  userName: {
    fontSize: "18px"
  }
});

export default withStyles(styles)(Header);
