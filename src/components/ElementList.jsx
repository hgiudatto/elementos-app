import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ElementList = (props) => {
    console.log(props);

    // TODO https://mui.com/components/tables/

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>Airport</TableCell>
                        <TableCell>Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.cities.map((city) => (
                        <TableRow key={city.name} sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                            <TableCell component="th" scope="city">{city.name}</TableCell>
                            <TableCell>{city.airport}</TableCell>
                            <TableCell>{city.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );    
};

export default ElementList;

