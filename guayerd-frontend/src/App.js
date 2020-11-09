import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
/*   Link,
  Redirect */
} from "react-router-dom";

import './css/App.css';
import './css/ContactPage.css';
import './css/HomePage.css';
import './css/ProductPage.css';
import './css/Error404.css';

/* COMPONENTS */
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import ContactPage from "./Components/ContactPage/ContactPage"
import Error404 from "./Components/Error404/Error404";

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
              <ProductsPage />
              <Footer />
            </Route>
            
            <Route path="/contacto">
              <NavBar />
                <ContactPage />
              <Footer />
            </Route>
            
            <Route path="/*">
              <NavBar />
              <Error404 />
              <Footer extraText="Page created by Matias L. Aquino"/>
            </Route>
          
          </Switch>
        </Router>
      </div>
    )
  }
}
