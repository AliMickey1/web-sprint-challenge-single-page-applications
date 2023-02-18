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
            <button id="Home">
                <Link to ="/">Home</Link>
              </button>
              <button id="order-pizza">
                <Link to ="/pizza">Order Pizza</Link>
              </button>


            {/* <Switch> */}
              {/* <Route exact path="/"><Home /></Route> */}
              <Route path="/pizza"><Pizza /></Route>
            {/* </Switch> */}

          </div>
      </nav>
        <div className="imgcontainer">
          <img className='pizzaImg' src='Assets/Pizza.jpg' alt=''/>
      </div>
    </div>
  );
  };

  export default App;