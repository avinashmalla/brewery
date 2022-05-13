import React, { useState, useEffect, Component } from 'react';
import { CssBaseline, Typography, TextField, Container, Box, Grid, FormControl, FormLabel, FormGroup, FormControlLabel, FormHelperText, Checkbox, InputLabel, Select, MenuItem } from "@mui/material";
import axios from 'axios';
import BreweryCard from "./BreweryCard";

class SearchBrewers extends Component {
    state = { 
        brewers: [],
        search: '',
        category: {
            micro: false,
            planning: false,
            brewpub: false
        },
        catArray: [],
        city: 'All'
    }

    
    componentDidMount() {
        axios.get('https://api.openbrewerydb.org/breweries/')
            .then(res => {
                console.log(res)
                const brewers = res.data;
                this.setState({ brewers });
            })
            .catch(err => {
                console.log(err)
            })
    }
   
    updateSearch = event => { //Search Bar
        this.setState({
            search: event.target.value
        })
    }

    updateFilter = event => { //Dropdown menu
        this.setState({
            city: event.target.value
        })
    }

    handleCheckBox = event => { //Checkbox
        let state = this.state;
        state.category[event.target.value] = event.target.checked;
        this.setState(state);
        this.state.catArray = Object.keys(this.state.category).filter(key => this.state.category[key])
    }

    searchFilter = () => {
        return this.state.brewers.filter(
            brewer => brewer.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
    }
    
    categoryFilter = (brewers) => {
        return this.state.catArray.length === 3
        ? brewers
        : brewers.filter(brewer => this.state.catArray.includes(brewer.brewery_type))
    }

    cityFilter = (brewers) => {
        return this.state.city === 'All'
        ? brewers
        : brewers.filter(brewer => brewer.city.toLowerCase().replace(/ /g, '-') === this.state.city.toLowerCase())
    }

    render() {
        let result = this.searchFilter()
        result = this.cityFilter(result)
        result = this.categoryFilter(result)
        
        return (
            <>
                <CssBaseline />
                <Container maxWidth = "md">
                    <Grid container spacing={2} direction='column' maxWidth='md'>
                        <Grid item xs = {12}>
                            <Typography variant='h2' align = "center" color = "primary" gutterBottom>
                                Search Brewery
                            </Typography>
                            <TextField fullWidth color="secondary" label="search by name" id="fullWidth" onChange={this.updateSearch}/>
                        </Grid>
                        <Grid item xs = {12} container direction = 'row'>
                            <Grid item xs = {12} sm = {6}>
                            <Box sx={{  textAlign: 'left'}}>
                                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                                    <FormLabel component="legend"  color = 'secondary'>Select Brewery type</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox value = 'micro' onChange ={this.handleCheckBox} checked = {this.state.category.micro} size="small" color = 'secondary'/>} label="Micro" labelPlacement="end"/>
                                        <FormControlLabel control={<Checkbox value = 'planning' onChange ={this.handleCheckBox} checked = {this.state.category.planning}  size="small"  color = 'secondary'/>} label="Planning" labelPlacement="end"/>
                                        <FormControlLabel control={<Checkbox value = 'brewpub' onChange ={this.handleCheckBox} checked = {this.state.category.brewpub}  size="small"  color = 'secondary'/>} label="Brew Pub" labelPlacement="end"/>
                                    </FormGroup>
                                </FormControl>
                            </Box> 
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.city}
                                        label="City"
                                        onChange={this.updateFilter}
                                    >
                                        <MenuItem value='All'>All</MenuItem>
                                        <MenuItem value='boring'>Boring</MenuItem>
                                        <MenuItem value='chardon'>Chardon</MenuItem>
                                        <MenuItem value='corvallis'>Corvallis</MenuItem>
                                        <MenuItem value='delta'>Delta</MenuItem>
                                        <MenuItem value='export'>Export</MenuItem>
                                        <MenuItem value='fayetteville'>Fayetteville</MenuItem>
                                        <MenuItem value='gloucester'>Gloucester</MenuItem>
                                        <MenuItem value='huntington-beach'>Huntington Beach</MenuItem>
                                        <MenuItem value='manchester'>Manchester</MenuItem>
                                        <MenuItem value='miami'>Miami</MenuItem>
                                        <MenuItem value='montgomery'>Montgomery</MenuItem>
                                        <MenuItem value='oregon-city'>Oregon City</MenuItem>
                                        <MenuItem value='pasadena'>Pasadena</MenuItem>
                                        <MenuItem value='quinter'>Quinter</MenuItem>
                                        <MenuItem value='reedsburg'>Reedsburg</MenuItem>
                                        <MenuItem value='san-diego'>San Diego</MenuItem>
                                        <MenuItem value='san-jose'>San Jose</MenuItem>
                                        <MenuItem value='sylvania'>Sylvania</MenuItem>
                                        <MenuItem value='windsor'>Windsor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing = {2} padding = {2} >
                        {
                            result
                            .map((brewer) => (
                                    <BreweryCard 
                                        id = {brewer.id} 
                                        name={brewer.name} 
                                        brewery_type={brewer.brewery_type} 
                                        city={brewer.city}/>
                            ))
                        }
                        </Grid>
                    </Grid>
                </Container>
            </>
        );
    }
}
 
export default SearchBrewers;
