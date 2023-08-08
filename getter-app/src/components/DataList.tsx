import data from './../mock.json'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataList = () => {

  return (
    <TableContainer component={Paper} className='container'>
      <Table sx={{ minWidth: 320, alignSelf: 'center' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((item) => (
            <TableRow
              key={item.name + Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right"><a href={item.lnk}>{item.lnk}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
  
export default DataList;
