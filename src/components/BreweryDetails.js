import React, { useState, useEffect } from "react";
import axios from "axios";
import { CssBaseline, Container, Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate, useParams } from 'react-router-dom';

const BreweryDetails = () => {
    const [brewers, setBrewers] = useState([]);
    let { brewer } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries/' +  {brewer} )
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
            <Container maxWidth = "md">
                {
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', lineHeight: 2}}>
                    <CardContent style={{backgroundColor: "#FFDCD1", justifyContent: 'center'}}> 
                        <Typography gutterBottom variant = "body2" style={{ fontWeight: 600 }}>
                            Name: {brewers.name}
                        </Typography>
                        <Typography variant="body2">
                            Brewery Type: {brewers.brewery_type}
                        </Typography>
                        <Typography variant="body2">
                            Street: {brewers.street}
                        </Typography>
                        <Typography variant="body2">
                            Postal Code: {brewers.postal_code}
                        </Typography>
                        <Typography variant="body2">
                            City: {brewers.city}
                        </Typography>
                        <Typography variant="body2">
                            State: {brewers.state}
                        </Typography>
                        <Typography variant="body2">
                            Country: {brewers.country}
                        </Typography>
                        <Typography variant="body2">
                            Phone: {brewers.phone}
                        </Typography>
                        <Typography variant="body2">
                            Website: {brewers.website_url}
                        </Typography> 
                    </CardContent>
                    <CardActions style={{backgroundColor: "#FFF0B4", justifyContent: 'center'}}> 
                        <Button size="large" onClick={() => {navigate('/')}}> Go Back <HomeOutlinedIcon color="primary" /></Button>
                    </CardActions> 
                    </Card>
                }
            </Container>
        </>
     );
}
 
export default BreweryDetails;