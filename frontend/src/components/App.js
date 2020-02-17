import React from 'react';
import './../App.css';
import {
  Switch,
  Route

} from "react-router-dom";
import About from './about';
import Login from './RegisterLogin/index'
import Register from './RegisterLogin/Register'
import Home from './home'
import Example from './main/index'
function App() {
  return (
    <div >
      <Switch>
        <Route path="/home" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Example} />


      </Switch>

    </div>
  );
}

export default App;
