import React from 'react';
import './../App.css';
import {
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
        <Route path="/home" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />

      </Switch>

    </div>
  );
}

export default App;
