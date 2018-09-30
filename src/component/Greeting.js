import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  topGreeting: {
    fontFamily: "Josefin Sans",
    fontSize: "36px"
  },
  bottomGreeting: {
    fontFamily: "Josefin Sans",
    fontSize: "26px"
  }
});

function Greeting(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography
          variant="headline"
          component="h3"
          className={classes.topGreeting}
        >
          An inventory and sales tracking application...
        </Typography>
        <Typography component="p" className={classes.bottomGreeting}>
          and a reseller's best friend.
        </Typography>
      </Paper>
    </div>
  );
}

Greeting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Greeting);
