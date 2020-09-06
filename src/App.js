import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Posts from './Components/Posts/Posts';
import Navbar from './Components/Navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import PostAndCom from './Components/PostAndCom/PostAndCom';

function App() {
  return (
    <>
      <Navbar/>
        <Router>
          <Switch>
            <Route exact path='/' component={Posts}/>
            <Route exact path='/blog/details/:id' component={PostAndCom}/> 
            <Route exact path='*' component={Notfound}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
