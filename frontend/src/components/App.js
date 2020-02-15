import React from 'react';
import './../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import About from './about';
import Login from './RegisterLogin'
import Home from './home'
function App() {
  return (
    <div >
      <Switch>
        <Route path="/Home" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/Login" component={Login} />

      </Switch>

    </div>
  );
}

export default App;
