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

const rows = Items.items;

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date Sold</TableCell>
            <TableCell>Merchant</TableCell>
            <TableCell numeric>Sold Price</TableCell>
            <TableCell numeric>Fee</TableCell>
            <TableCell numeric>Shipping</TableCell>
            <TableCell numeric>Net Profit</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.dateSold}
                </TableCell>
                <TableCell>{row.merchant}</TableCell>
                <TableCell numeric>${row.soldPrice}</TableCell>
                <TableCell numeric>${row.fee}</TableCell>
                <TableCell numeric>${row.shipping}</TableCell>
                <TableCell numeric>${row.netProfit}</TableCell>
                <TableCell>{row.notes}</TableCell>
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
