import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../logo.svg";

// Overriding Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9575cd"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

// Styling
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#9575cd"
  },
  grow: {
    flexGrow: 1,
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "30px",
    padding: "20px 300px 30px 10px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  login: {
    fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              t r a c k n <img src={logo} className="App-logo" alt="logo" />
            </Typography>
            <Button className={classes.login} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
