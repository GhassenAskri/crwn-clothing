import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";

const HatsPage = () => (
  <div>
    <h1> HatsPage</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>

      {/* <HomePage> </HomePage> */}
    </div>
  );
}

export default App;
