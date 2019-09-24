import React from "react";
import Header from "./components/nav";
import { Router } from "@reach/router";

import Bookings from "./pages/bookings";
import Dashboard from "./pages/dashboard";
import Invoices from "./pages/invoices";
import Profile from "./pages/profile";
import Search from "./pages/search";

import "./App.css";

function App() {
  return (
    <Router>
      <Header path="/">
        <Dashboard path="/" />
        <Bookings path="/bookings" />
        <Invoices path="/invoices" />
        <Profile path="/profile" />
        <Search path="/search" />
      </Header>
    </Router>
  );
}

export default App;
