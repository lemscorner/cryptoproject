import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

//pages and components
import HomePage from "../components/Main/HomePage";
import NotFoundPage from "./NotFoundPage";
import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/sidebar.scss";
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <div className="row main-content">
            <div className="col sidebar">
              <Sidebar />
            </div>
            <div className="col-9 right-content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>            
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);