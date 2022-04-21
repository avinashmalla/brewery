import React from "react";
import { CssBaseline, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BreweryCard = (brewer) => {
    let navigate = useNavigate();
    const brewerCard = (
        <React.Fragment>
            <CardContent style={{backgroundColor: "#FFDCD1", justifyContent: 'left'}}> 
                <Typography variant = "body2" align = "left" style={{ fontWeight: 600 }}>
                    Name: {brewer.name}
                </Typography>
                <Typography variant="body2" align = "left">
                    Brewery Type: {brewer.brewery_type}
                </Typography>
                <Typography variant="body2" align = "left">
                    City: {brewer.city}
                </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: "#FFF0B4", justifyContent: 'center'}}> 
                <Button size="large" variant = "text" onClick={() => {navigate(`/${brewer.id}`);}}>View Details</Button>
            </CardActions>
        </React.Fragment>
    );

    return ( 
        <>
            <CssBaseline />
            <Grid item xs = {4}>
                <Card sx={{display: 'flex', flexDirection: 'column', lineHeight: 2}}>
                    {brewerCard}
                </Card>
            </Grid>
        </>
     );
}
 
export default BreweryCard;    