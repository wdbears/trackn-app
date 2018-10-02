import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Items from "./Items";

const styles = theme => ({
  root: {
    width: "80%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700
  }
});

/* 
 * Accessing JSON data 
 * console.log(Items.items[0].company);
*/
const rows = Items.items;

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date Bought</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Style</TableCell>
            <TableCell numeric>Item Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.dateBought}
                </TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell>{row.style}</TableCell>
                <TableCell numeric>${row.itemCost}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
