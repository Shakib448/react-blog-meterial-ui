import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Posts from './Components/Posts/Posts';
import Grid from '@material-ui/core/Grid';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import PostAndCom from './Components/PostAndCom/PostAndCom';

function App() {
  return (
    <Grid container direction="row" justify="center" alignItems="center" >
      <Navbar/>
        <Router>
          <Switch>
            <Route exact path='/' component={Posts}/>
            <Route exact path='/blog/details/:id' componet={PostAndCom}/> 
            <Route exact path='*' component={Notfound}/>
          </Switch>
        </Router>
    
    </Grid>
  );
}

export default App;
