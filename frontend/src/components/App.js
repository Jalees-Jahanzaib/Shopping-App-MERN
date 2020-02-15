import React from 'react';
import './../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import About from './about'
function App() {
  return (
    <div >
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
      <div>
        sfafa
      </div>
    </div>
  );
}

export default App;
