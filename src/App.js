import React, { Fragment } from 'react';
import Contacto from './componente/Contacto';
import Inicio from './componente/Inicio';
import Nosotros from './componente/Nosotros';
import User from './componente/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className='btn-group'>
          <Link to="/inicio" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
        </div>
      
        <hr/>
        <Switch>
        <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/inicio" exact>
            <Inicio />
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
