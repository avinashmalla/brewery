import React from "react";
import { CssBaseline, Typography, Grid, Card, CardContent, CardActions, Button, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BreweryCard = (brewer) => {
    let navigate = useNavigate();
    const brewerCard = (
        <React.Fragment>
            <CardContent style={{backgroundColor: "#cad331", height:120, justifyContent: 'left'}}> 
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
            <CardActions sx = {{
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            height: 48,
                            padding: '0 10px',
                            }}>
                    <Button fullWidth onClick={() => {navigate(`/${brewer.id}`);}}>View Details</Button>
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