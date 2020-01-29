import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendList from './components/FriendList';
import Friend from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="links">
          <Link to ="/login">Login</Link>
        <Link to='/protected'>Friends List</Link>
        <Link to='/addFriend'>Add a Friend</Link>
        </div>

     <Switch>
     <PrivateRoute path="/protected" component={FriendList} /> 
     <PrivateRoute path='/addFriend' component={Friend}/>
    <Route path="/login" component={Login} />
    <Route component={Login} />
     </Switch>

      </Router>
    </div>
  );
}

export default App;
