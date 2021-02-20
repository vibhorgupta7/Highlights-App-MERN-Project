import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import highlight from './images/highlights.png'

const App = () => {
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Highlights</Typography>
                <img src={highlight} alt="Highlights" height="60" ></img>
            </AppBar>
        </Container>
    )
}

export default App; 