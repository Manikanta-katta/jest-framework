import logo from './logo.svg';
import './App.css';

import Login from './Components/Login';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>

   <Switch>
   <Route exact path='/' >
        <Login/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
   </Switch>
 
      
       

    
      </Router>
  
    </div>
  );
}

export default App;
