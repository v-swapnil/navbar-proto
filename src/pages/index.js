import React from "react";
import { Router } from "@reach/router";

import Bookings from "./bookings";
import Dashboard from "./dashboard";
import Invoices from "./invoices";
import Profile from "./profile";
import Search from "./search";

function App() {
  return (
    <Router>
      <Dashboard path="/" />
      <Bookings path="/bookings" />
      <Invoices path="/invoices" />
      <Profile path="/profile" />
      <Search path="/search" />
    </Router>
  );
}

export default App;
