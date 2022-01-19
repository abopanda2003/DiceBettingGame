import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontFamily: "TypoRoundBold",
    color: theme.palette.common.white,
    border: 'none',
    fontSize: 23
  },
  body: {
    fontFamily: "TypoRoundBold",
    fontSize: 23,
    color: "#8f8391",
    borderBottom: '1px solid #5e2764'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba(64,3,73, 0.8)",
  },
}))(TableRow);





const profitStyle = {
  color: "#6cda22"
}

class LiveTable extends React.Component {

  render () {
    return (
      <TableContainer component={Paper} className="tableContainer">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="tableRow">
              <StyledTableCell align="center">Player</StyledTableCell>
              <StyledTableCell align="center">Bet</StyledTableCell>
              <StyledTableCell align="center">Profit</StyledTableCell>
              <StyledTableCell align="center">Payout</StyledTableCell>
              <StyledTableCell align="center">Guess</StyledTableCell>
              <StyledTableCell align="center">Roll</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">{row.player.slice(0, 5)}...</StyledTableCell>
                <StyledTableCell align="center">{row.bet}</StyledTableCell>
                <StyledTableCell align="center" style={profitStyle}>{row.profit}</StyledTableCell>
                <StyledTableCell align="center">{row.payout}</StyledTableCell>
                <StyledTableCell align="center">{row.guess}</StyledTableCell>
                <StyledTableCell align="center">{row.roll}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
export default LiveTable;
