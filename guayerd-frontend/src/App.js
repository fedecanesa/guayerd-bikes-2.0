import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
/*   Link,
  Redirect */
} from "react-router-dom";

import './css/style.css' /* TODO Importar css correctamente */


/* COMPONENTS */
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductsPage from "./Components/ProductsPage/ProductsPage";

export default class App extends React.Component
{
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
              <HomePage />
              <Footer />
            </Route>
            <Route path="/productos">
              <NavBar />
              <ProductsPage></ProductsPage>
              <Footer />
            </Route>
            <Route path="/contacto">
              <NavBar />

              <Footer />
            </Route>
            <Route path="/*">HOLA 404</Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
