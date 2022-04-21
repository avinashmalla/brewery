import { useState, useEffect } from "react";
import { CssBaseline, Typography, TextField, Container, Grid } from "@mui/material";
import axios from "axios";
import BreweryCard from "./BreweryCard";

const SearchBrewers = () => {
    const [brewers, setBrewers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries/')
        .then(res => {
            console.log(res)
            setBrewers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }, [])

    return ( 
        <>
            <CssBaseline />
            <Container maxWidth = "sm">
                <Typography variant='h2' align = "center" color = "primary" gutterBottom>
                    Search Brewery
                </Typography>
                <TextField fullWidth color="secondary" label="search by city" id="fullWidth" onChange={(event) => setSearch(event.target.value)}/>
            </Container>
            <Container maxWidth = "md" >
            <Grid container spacing = {2} padding = {2} >
                {
                    brewers
                    .filter((data) => {
                        if (search === ''){ 
                            return data; 
                        }
                        else if(data.city.toLowerCase().includes(search.toLowerCase())){ 
                            return data; }})
                    .map((brewer) => (
                            <BreweryCard 
                                id = {brewer.id} 
                                name={brewer.name} 
                                brewery_type={brewer.brewery_type} 
                                city={brewer.city}/>
                    ))
                }
            </Grid>
            </Container>
        </>
     );
}

export default SearchBrewers;    