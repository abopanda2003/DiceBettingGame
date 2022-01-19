import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';

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

function createData(id,referralId, TT) {
  return { id, referralId, TT};
}

const rows = [
  
];

const profitStyle = {
  color: "#6cda22"
}

class LiveTable extends React.Component {

  componentDidMount () {
    Axios({
      method: "POST",
      url: "http://localhost:5000/api/referral/get-all-referral"
    })
    .then(res=>{
      var temp1 = 0;
      var temp2 = 0;
      var temp1_add;
      var temp2_add;
      if(res.data.length>=2){
        res.data.map((element)=>{
          if(element.amount>=temp1){
            temp2 = temp1;
            temp2_add = temp1_add;
            temp1 = element.amount;
            temp1_add = element.publicKey
          }
          console.log("temp", temp1, temp2)
        })
      }
      else{
        rows.push(createData(1,res.data[0].publicKey, `+${res.data[0].amount} SLSH`))
        console.log(rows)
      }


    })
  }
  render () {
    return (
      <TableContainer component={Paper} className="tableContainer">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="tableRow">
              <StyledTableCell align="center">Referall ID</StyledTableCell>
              <StyledTableCell align="center">SLSH</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">{row.referralId}</StyledTableCell>
                <StyledTableCell align="center" style={profitStyle}>{row.TT}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
export default LiveTable;
