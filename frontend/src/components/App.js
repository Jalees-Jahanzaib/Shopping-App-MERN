import React from 'react';
import './../App.css';
import {
  Switch,
  Route

} from "react-router-dom";
import About from './about';
import Login from './RegisterLogin/index'
import Register from './RegisterLogin/Register'
import VendorR from './RegisterVendors/Register'
import LoginV from './RegisterVendors/index'
import Home from './home'
import Vhome from './Vhome'
import VProducts from './Vhome/readytodispach'
import Dispatched from './Vhome/dispached'
function App() {
  return (
    <div >
      <Switch>
        <Route path="/home" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/vendor-login" component={LoginV} />
        <Route path="/vendor-register" component={VendorR} />
        <Route path="/vendor-home" component={Vhome} />
        <Route path="/vendor-ready-to-dispatch" component={VProducts} />
        <Route path="/vendor-dispatched" component={Dispatched} />




      </Switch>

    </div>
  );
}

export default App;
