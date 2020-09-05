import React from 'react';
import style from './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Posts from './Components/Posts/Posts';
import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Grid container direction="row" justify="center" alignItems="center" >
        <Navbar/>
        <Posts/>
    </Grid>
  );
}

export default App;
