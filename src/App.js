import logo from './logo.svg';
import './App.css';

import Login from './Components/Login';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import FollowersList from './Components/Followers';


function App() {
  return (
    <div >
      <Router>

   <Switch>
   <Route exact path='/' >
        <Login/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route exact path='/followers'>
            <FollowersList/>
          </Route>
   </Switch>
    
      </Router>
  
    </div>
  );
}

export default App;
