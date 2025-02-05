import React from "react";
import Form from "../UI";

import { Router, Route } from "react-router";

export default function Routes() {
  <Router>
    <Route path="/form" Component={Form}></Route>
    <Route path="/generate"></Route>
  </Router>;
}
