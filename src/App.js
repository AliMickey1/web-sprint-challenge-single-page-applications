import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Blogs from "./Components/Blogs"


const App = () => {
  return (
  <Router>
     <h1>BloomTech Eats</h1>
        <div className="App"> 
          <p>Order the best pizza you will ever taste!</p>
           <nav>
            <li>
            <Link to ="/pizza"> Order Now!  </Link>
            </li>
            <li>
            <Link to ="/blogs"> Blogs </Link>
            </li>
           </nav>


            <button>
              <Route path ="/pizza" component={Pizza} />
              <Route path ="/blogs" component={Blogs} />
            </button>

      </div>
    </Router>
  );
};
export default App;
