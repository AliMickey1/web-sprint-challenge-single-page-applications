import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Home from "./Home";


const App = () => {




  return (

    <div className="App">  

      <nav>
        <h1>Place your order in App</h1>
          <p>Order by clicking the link</p>
            <div className="nav-links">
            <button id="Home">
                <Link to ="/">Home</Link>
              </button>
              <button id="order-pizza">
                <Link to ="/pizza">Order Pizza</Link>
              </button>


            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/pizza"><Pizza /></Route>
            </Switch>

          </div>
      </nav>
    </div>
  );
  };

  export default App;