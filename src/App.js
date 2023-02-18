import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Components/Pizza";
import './App.css'


const App = () => {


  return (

    <div className="App">  

      <nav>
        <div className="header">
      <h1>BloomTech Eats</h1>
          <p>Order the best pizza you will ever taste!</p>
        </div>
            <div className="nav-links">

                <Link to ="/">Home</Link>


                <Link id="order-pizza" to ="/pizza">Order Pizza</Link>



            <Switch>
              <Route path="/pizza"><Pizza /></Route>
            </Switch>

          </div>
      </nav>

    </div>
  );
  };

  export default App;