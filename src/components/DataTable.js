import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Container, CssBaseline,  } from '@mui/material';
import axios from 'axios';

const columns = [
    {field: 'name', headerName: 'Name', minWidth: 230},
    {field: 'brewery_type', headerName: 'Brewery Type', minWidth: 100},
    {
        field: 'street', 
        headerName: 'Street', 
        minWidth: 200,
        valueFormatter: (params) => {
            if (params.value == null) {
              return 'NA';
            }
            return params.value;
          },
    },
    {field: 'city', headerName: 'City', minWidth: 140},
    {field: 'state', headerName: 'State', minWidth: 120},
    {field: 'postal_code', headerName: 'Postal Code', minWidth: 100},
    {field: 'phone', headerName: 'Phone', minWidth: 120},
    {field: 'website_url', headerName: 'Website', minWidth: 250},  
];

const DataTable = () => {
    const [brewers, setBrewers] = useState([]);

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries/')
        .then(res => {
            console.log(res)
            setBrewers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }, []);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid
                        rows={brewers}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        components={{
                            Toolbar: GridToolbar,
                        }} />
                </div>
            </Container>
        </>

     )
}
 
export default DataTable