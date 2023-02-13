import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Components/Pizza";
import schema from './Components/formSchema'
import * as yup from 'yup';
import axios from 'axios';


const initialValue = {
  'name-input': '',
  'size-dropdown': '',
  'pizza-sauce': '', 
  'pepperoni': false,
  'sausage': false,
  'canadianbacon': false,
  'spicyitalsaus': false,
  'grilledchix': false,
  'onions': false,
  'greenpeppers': false,
  'tomatoes': false,
  'olives': false,
  'garlic': false,
  'artichoke': false,
  '3cheese': false,
  'pineapple': false,
  'xtracheese': false,
  'special-text': ''
  };


  const initialFormErrors = {
    'name-input': '',
    'size-dropdown': '',
    'pizza-sauce': '', 
      };

  const initialOrder = []
  const intialDisabled = true

const App = () => {


const [formValues, setFormValues] = useState(initialValue);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [orders, setOrders] = useState(initialOrder); //returns a database record of name, size, toppings and special instructions
const [disabled, setDisabled] = useState(intialDisabled)

const getOrder = () => {
  axios.get('http://regres.in/api/orders')
    .then(res=> {
      setOrders(res.data)
    })
    .catch(err =>  console.log(err))
}

const formSubmit = e => {

    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {

      setOrders([res.data, ...orders] )
      setFormValues(initialValue)
    })
    .catch(err => console.error(err))
}


const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...setFormErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...setFormErrors, [name]: err.errors[0] }))
}



const handleChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value});
}


  return (
    

    <div className="App">  
    <nav>
     <h1>BloomTech Eats</h1>
         <p>Order the best pizza you will ever taste!</p>
        <div className="nav-links">
           <button id="order-pizza">
              <Link to ="/pizza"> Order Now!  </Link>
           </button>
        </div>
        </nav>

      <Switch>
          <Route path ="/pizza"> <Pizza /></Route>
      </Switch>
      </div>


 );
};
export default App;
