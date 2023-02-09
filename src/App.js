import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";
// import schema from './validation/formSchema'
// import * as yup from 'yup';
// import axios from 'axios';


// const initialValue = {
//   cname: ''
//   };


//   const initialFormErrors = {
//       cname: ''
//       };

const App = () => {


// const [formValues, setFormValues] = useState(initialValue);
// const [formErrors, setFormErrors] = useState(initialFormErrors);
// const [order, setOrder] = useState([]); //returns a database record of name, size, toppings and special instructions

// const formSubmit = e => {

//     axios.post('https://reqres.in/api/orders', formValues)
//     .then(res => {
//       // setOrders([res.data, ...orders] )
//       // <pre>{JSON.stringify(setOrders(res.data, ...orders ))}</pre>
//       console.log("success", res);
//     })
//     .catch(err => console.error(err))
// }


// const validate = (name, value) => {
//   yup.reach(schema, name)
//   .validate(value)
//   .then(() => setFormErrors({ ...setFormErrors, [name]: '' }))
//   .catch(err => setFormErrors({ ...setFormErrors, [name]: err.errors[0] }))
// }



// const handleChange = (name, value) => {
//   validate(name, value);
//   setFormValues({...formValues, [name]: value});
// }


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
