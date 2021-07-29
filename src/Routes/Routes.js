import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "../Components/auth/Login";
import Register from "../Components/auth/Register";
import ChangePassword from "../Components/main/ChangePassword";
import EditProfile from "../Components/main/EditProfile";
import Profile from "../Components/main/Profile";
import PrivateRoute from "./Privateroute";
import Dashboard from "../Components/main/Dashboard";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { isAutheticated } from "../Components/auth/authhelper";
import { API } from "../API";
import Products from "../Components/main/Commerce/Products/Products";
import AddProducts from "../Components/main/Commerce/Products/AddProducts";
import Editproducts from "../Components/main/Commerce/Products/Editproducts";
import Catagory from "../Components/main/Commerce/Catagory/Catagory";
import AddCatagory from "../Components/main/Commerce/Catagory/AddCatagory";
import EditCatagory from "../Components/main/Commerce/Catagory/EditCatagory";
import Base from '../Components/Base'
import Subcategory from "../Components/main/Commerce/Subcategory/Subcategory";
import Addsubcategory from "../Components/main/Commerce/Subcategory/Addsubcategory";
import EditSubcategory from "../Components/main/Commerce/Subcategory/EditSubcategory";
import Client from "../Components/main/Commerce/Clients/Client";
import ViewClient from "../Components/main/Commerce/Clients/ViewClient";
import Gst from "../Components/main/Commerce/Configration/Gst";
import Socialmedia from "../Components/main/Commerce/Configration/Socialmedia";
import Address from "../Components/main/Commerce/Configration/Address";
import Logo from "../Components/main/Commerce/Configration/Logo";
const { token } = isAutheticated();

export default function Routes() {

  setInterval(async () => {
    let idToken = sessionStorage.getItem("id_token");
    let refresh_token = sessionStorage.getItem("refresh_token");
    let params = new URLSearchParams({ refresh_token });
    refresh_token && await axios
      .post(`${API}/api/client/refreshToken`, params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then((response) => {
        console.log("cognito data", response);
        let data = response.data.data
        sessionStorage.setItem(
          "access_token", data.AccessToken
        );
        sessionStorage.setItem(
          "id_token", data.IdToken
        );


      })
      .catch((err) => {
        console.log(err);
      });

  }, 3000000);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>

        <Base>
          {/* BASE STARTING HERE */}
          <PrivateRoute
            path="/dashboard"
            exact
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            path="/notification"
            exact
            component={Notification}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            exact
            component={Profile}
          ></PrivateRoute>
          <PrivateRoute
            path="/edit/profile"
            exact
            component={EditProfile}
          ></PrivateRoute>
          <PrivateRoute
            path="/change/password"
            exact
            component={ChangePassword}
          ></PrivateRoute>
          <PrivateRoute
            component={Products}
            exact
            path="/comproducts"
          ></PrivateRoute>
          <PrivateRoute
            component={AddProducts}
            exact
            path="/comproducts/add"
          ></PrivateRoute>
          <PrivateRoute
            component={Editproducts}
            exact
            path="/comproducts/edit/:productId"
          ></PrivateRoute>
          <PrivateRoute
            component={Catagory}
            exact
            path="/comcatagory"
          ></PrivateRoute>
          <PrivateRoute
            component={AddCatagory}
            exact
            path="/comcatagory/add"
          ></PrivateRoute>
          <PrivateRoute
            component={EditCatagory}
            exact
            path="/comcatagory/edit/:catagoryId"
          ></PrivateRoute>
          <PrivateRoute
            component={Subcategory}
            exact
            path="/comsubcatagory"
          ></PrivateRoute>
          <PrivateRoute
            component={Addsubcategory}
            exact
            path="/comsubcatagory/add"
          ></PrivateRoute>
          <PrivateRoute
            component={EditSubcategory}
            exact
            path="/comsubcatagory/edit/:catagoryId"
          ></PrivateRoute>
          <PrivateRoute component={Client} exact path="/clients"></PrivateRoute>
          <PrivateRoute component={ViewClient} exact path="/client-view"></PrivateRoute>
          <PrivateRoute component={Gst} exact path="/gst"></PrivateRoute>
          <PrivateRoute component={Socialmedia} exact path="/socialmedia"></PrivateRoute>
          <PrivateRoute component={Address} exact path="/address"></PrivateRoute>
          <PrivateRoute component={Logo} exact path="/logo"></PrivateRoute>



          {/* BASE ENDING HERE */}
        </Base>

      </Switch>
    </Router>
  );
}
