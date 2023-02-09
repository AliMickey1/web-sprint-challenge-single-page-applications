import React from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";




const App = () => {



  return (
    
    <div className="App">  
    <nav>
     <h1>BloomTech Eats</h1>
         <p>Order the best pizza you will ever taste!</p>

            <li>
            <Link to ="/pizza"> Order Now!  </Link>
            </li>
           </nav>



              <Route path ="/pizza" component={Pizza} />


      </div>

  );
};
export default App;
