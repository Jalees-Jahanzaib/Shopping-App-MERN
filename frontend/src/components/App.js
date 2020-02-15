import React from 'react';
import './../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from './about'
function App() {
  return (
    <div >
      <Switch>
        <Router path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
