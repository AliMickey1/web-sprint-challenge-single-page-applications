import React, { useState, useEffect } from 'react';
import { formSchema } from './Validation/formSchema'
import * as yup from 'yup';
import axios from 'axios';



const initialValue = {
  'custName': '',
  'size': '',
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
  'special': ''
  };


  const initialFormErrors = {
    'custName': '',
    'size-dropdown': '',
    'pizza-sauce': '', 
      };

  const initialOrder = []
  const initialDisabled = true
 
  const handleError = err => { debugger }; 

const Pizza = () => {
   

   
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled) 
    const [orders, setOrders] = useState(initialOrder); //returns a database record of name, size, toppings and special instructions
    const [toppings, setToppings] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    
    const formSubmit = evt => {
        evt.preventDefault();

        console.log("Your order was submitted.");
        axios
        .post('https://reqres.in/api/orders', formValues)
        .then(res => {
    
          setOrders([res.data, ...orders] )
          alert(res.data)
          console.log(res.data)
          setFormValues(initialValue)
        })
        .catch(handleError)
    }
    

    //multiple checkboxes
    const updateCheckStatus = evt => () => {
        const index = isChecked.indexOf(evt)
        const allChecked = [...isChecked]

        if(index === -1)
        {
            allChecked.push(evt)

        }
        else{
            allChecked.splice(index, 1);
        }
        setToppings(allChecked)
        initialOrder(allChecked)
      }

      const onChangeTopping = (evt) => {
        updateCheckStatus(evt.target.checked)
      }


    //     const index = formValues.indexOf(evt.target.value);
        // setToppings(
        //   toppings.map((topping, currentIndex) =>
        //     currentIndex === index
        //       ? { ...topping, checked: !topping.checked }
        //       : topping
        //   )
        // )
    
        // or
    const onChange = evt => {
        setIsChecked(!isChecked)
        }
    

    
    const handleChange = (evt) => {

        const { name, value } = evt.target
        yup.reach(formSchema, name)
        .validate(value)
        .then((valid) => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
      setFormValues({...formValues, [name]: value});

    }


 

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
        }, [formValues])
    
    return(
<>

        <h1>Build your Own Pizza</h1>
        
                <div class="customer-info">

                <form id="pizza-form">
                    <label for="customerName">Customer's Name:</label>
                    <input type="text" 
                    name="custName" 
                    id="name-input"
                    value={orders.custName}
                    onChange={handleChange}
                    
                    />
                    { formErrors.custName.length > 2 && <p className='error'>{formErrors.custName}</p>}
                  <div className="size-dropdown">
                      <h2>Choice of Size</h2>
                        <h3>Required</h3>
                        <label for="pizza-size">Select your size</label>
                            <select id="size-dropdown" name="size" value={orders.size}>
                                <option value=''>- Select a size -</option>
                                <option value="Small">Small, 10"</option>
                                <option value="Medium">Medium, 12"</option>
                                <option value="Large">Large, 14"</option>
                                <option value="XL">X-Large, 16"</option>
                            </select>
                    </div>
              <div className="pizza-sauce">

                  <h2>Choice of Sauce</h2>
                            
                        <label>Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='original'
                        onChange={onChange}
                    />
                    </label> 

                    <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        onChange={onChange}
                    />
                    </label>

                    <label>BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq'
                        onChange={onChange}
                    />
                    </label>     
                    
                    <label>Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        onChange={onChange}
                    />
                    </label>
                    </div>

                <div className="toppings">
                    <h2>Add Toppings</h2>
                    <h3>Choose up to 10</h3>

                    <label>Pepperoni
                        <input
                        type='checkbox'
                        value='pepperoni'
                        name='topping'
                        onChange={onChangeTopping}

                        />
                    </label>

                        <label>Sausage
                        <input
                        type="checkbox"
                        value="sausage"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Canadian Bacon
                        <input
                        type="checkbox"
                        value="canadianbacon"
                        name='topping'
                        onChange={onChangeTopping}
                     
                        />
                    </label>
                        <label>Spicy Italian Sausage
                        <input
                        type="checkbox"
                        value="spicyitalsaus"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Grilled Chicken
                        <input
                        type="checkbox"
                        value="grilledchix"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>
                    <label>Onions
                        <input
                        type="checkbox"
                        value="onions"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>
                        <label>Green Peppers
                        <input
                        type="checkbox"
                        value="greenpeppers"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Diced Tomatoes
                        <input
                        type="checkbox"
                        value="tomatoes"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Black Olives
                        <input
                        type="checkbox"
                        topping="olives"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Roasted Garlic
                        <input
                        type="checkbox"
                        value="garlic"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Artichoke Hearts
                        <input
                        type="checkbox"
                        value="artichoke"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>
                        <label>Three Cheese
                        <input
                        type="checkbox"
                        value="3cheese"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Pineapple
                        <input
                        type="checkbox"
                        value="pineapple"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>

                        <label>Extra Cheese
                        <input
                        type="checkbox"
                        value="xtracheese"
                        name='topping'
                        onChange={onChangeTopping}
                        />
                    </label>


                </div>

                </form>

            <div className="special-text">
                <h2>Special Instructions</h2>
                <h3>Anything else you'd like to add?</h3>
                <label for="special=text">
                    <textarea id="special-text" 
                    name='special'
                    rows="10" cols="100"
                    onChange={handleChange}
                    />
                        
                    
                </label>
            </div>
            <button id="order-button" onSubmit={() => formSubmit()}>Add to Order</button>
                </div>        
       </>            
    )
}

export default Pizza;