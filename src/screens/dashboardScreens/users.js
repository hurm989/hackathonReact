import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:"bold",fontSize:18}}>User Name</TableCell>
                        <TableCell sx={{fontWeight:"bold",fontSize:18}} align="right">Email</TableCell>
                        <TableCell sx={{fontWeight:"bold",fontSize:18}} align="right">Date</TableCell>
                        <TableCell sx={{fontWeight:"bold",fontSize:18}} align="right"></TableCell>
                        <TableCell align="right"><button className='btn btn-primary btn-md'>Delete All</button></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                gh
                            </TableCell>
                            <TableCell align="right">a</TableCell>
                            <TableCell align="right">b</TableCell>
                            <TableCell align="right"><button className='btn btn-primary btn-md'>Edit</button></TableCell>
                            <TableCell align="right"><button className='btn btn-primary btn-md'>Delete</button></TableCell>
                        </TableRow>
                   
                </TableBody>
            </Table>
        </TableContainer>
    );
}
