import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Pizza";
import App from "../App"

function Home() {
	return (


<div className="App">  

<nav>
  <h1>BloomTech Eats</h1>
    <p>Order the best pizza you will ever taste!</p>
      <div className="nav-links">
      <button><Link to="/home">Home</Link></button>
        <button id="order-pizza">
          <Link to ="/pizza">Order Pizza</Link>
        </button>
        <button><Link to="/app">App</Link></button>


      <Switch>
        <Route path="/pizza"><Pizza /></Route>
        <Route path="/app"><App /></Route>
      </Switch>

    </div>
</nav>
</div>
	);
}

export default Home;