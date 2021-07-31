import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { defaultRoutes } from "./routesList";
import Default from "../Layouts/Default";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {defaultRoutes.map((route, id) => (
            <Route exact path={route.path} key={id} component={Default} />
          ))}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
