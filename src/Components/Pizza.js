import React, { useState, useEffect } from 'react';
import { formSchema } from './Validation/formSchema'
import * as yup from 'yup';
import axios from 'axios';




const initialValue = {  
    custName: '',
    size: '',
    sauce: '', 
    pepperoni: false,
    sausage: false,
    canadianbacon: false,
    spicyitalsaus: false,
    grilledchix: false,
    onions: false,
    greenpeppers: false,
    tomatoes: false,
    olives: false,
    garlic: false,
    artichoke: false,
    trescheese: false,
    pineapple: false,
    xtracheese: false,
    special: '',
    }



  const initialFormErrors = {
    custName: '',
      };

  const initialOrder = []
  const initialDisabled = true
 
  const handleError = err => { debugger }; 

const Pizza = () => {
   

   
    const [formValues, setFormValues] = useState({  
    custName: '',
    size: '',
    sauce: '', 
    pepperoni: false,
    sausage: false,
    canadianbacon: false,
    spicyitalsaus: false,
    grilledchix: false,
    onions: false,
    greenpeppers: false,
    tomatoes: false,
    olives: false,
    garlic: false,
    artichoke: false,
    trescheese: false,
    pineapple: false,
    xtracheese: false,
    special: '',
    })

    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled) 
    const [orders, setOrders] = useState(initialOrder); //returns a database record of name, size, toppings and special instructions
    const [isChecked, setIsChecked] = useState(false)


    
    const formSubmit = evt => {
        evt.preventDefault();
        alert('Your pizza is in the works and will be on the way soon.' )
        alert(formValues)
       
        // const form = document.querySelector("form");
        // const formData = new FormData(form)
        axios
        .post('https://reqres.in/api/orders', formValues)
        .then(res => {
          setOrders([res.data, ...orders] )
          console.log(orders)
          setFormValues(initialValue)
        })
        .catch(handleError)
    
    }


    const onChange = event => {
             const { value, name } = event.target;
            yup.reach(formSchema, name)
            .validate(value)
            .then((valid) => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))

            setFormValues({ ...formValues, [name]: value });
          };
    
      const onChangeTopping = evt => {
        const { checked, value, name, type } = evt.target;
        const isCheckbox = type === "checkbox" ? checked : value
        setFormValues({...formValues, [name]: isCheckbox});
        setIsChecked(checked)
    }
    const onChangeSpecial = event => {
        const { value, name } = event.target;
       setFormValues({ ...formValues, [name]: value });
     };
    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
        }, [formValues])
    
    return(
<>


        
                <div class="customer-order">

                <form onSubmit={formSubmit} id="pizza-form">
                
                <h1>Build your Own Pizza</h1>
                    <label for="customerName">Customer's Name:</label>
                    <input type="text" 
                    placeholder='Enter your first and last name'
                    name="custName" 
                    id="name-input"
                    value={formValues.custName}
                    onChange={onChange}
                   
                    />
                    { formErrors.custName.length > 2 && <p className='error'>{formErrors.custName}</p>}
                
                  <div className="size-dropdown">
                      <h2>Choice of Size</h2>
                        <h3>Required</h3>
                        <label for="pizza-size">Select your size: {""}</label>
                            <select id="size-dropdown" name="size"  onChange={onChangeSpecial}>
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
                        value={formValues.pepperoni}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.pepperoni.checked}

                        />
                    </label>

                        <label>Sausage
                        <input
                        type="checkbox"
                        value={formValues.sausage}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.sausage.checked}
                        />
                    </label>

                        <label>Canadian Bacon
                        <input
                        type="checkbox"
                        value={formValues.canadianbacon}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.canadianbacon.checked}
    
                     
                        />
                    </label>
                        <label>Spicy Italian Sausage
                        <input
                        type="checkbox"
                        value={formValues.spicyitalsaus}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.spicyitalsaus.checked}
                        />
                    </label>

                        <label>Grilled Chicken
                        <input
                        type="checkbox"
                        value={formValues.grilledchix}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.grilledchix.checked}
                        />
                    </label>
                    <label>Onions
                        <input
                        type="checkbox"
                        value={formValues.onions}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.onions.checked}
                        />
                    </label>
                        <label>Green Peppers
                        <input
                        type="checkbox"
                        value={formValues.greenpeppers}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.greenpeppers.checked}
                        />
                    </label>

                        <label>Diced Tomatoes
                        <input
                        type="checkbox"
                        value="tomatoes"
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.tomatoes.checked}
                        />
                    </label>

                        <label>Black Olives
                        <input
                        type="checkbox"
                        value={formValues.olives}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.olives.checked}
                        />
                    </label>

                        <label>Roasted Garlic
                        <input
                        type="checkbox"
                        value={formValues.garlic}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.garlic.checked}
                        />
                    </label>

                        <label>Artichoke Hearts
                        <input
                        type="checkbox"
                        value={formValues.artichoke}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.artichoke.checked}
                        />
                    </label>
                        <label>Three Cheese
                        <input
                        type="checkbox"
                        value={formValues.trescheese}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.trescheese.checked}
                        />
                    </label>

                        <label>Pineapple
                        <input
                        type="checkbox"
                        value={formValues.pineapple}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.pineapple.checked}
                        />
                    </label>

                        <label>Extra Cheese
                        <input
                        type="checkbox"
                        value={formValues.xtracheese}
                        name='topping'
                        onChange={onChangeTopping}
                        checked={formValues.xtracheese.checked}
                        />
                    </label>
                </div>

            <div className="special-text">
                <h2>Special Instructions</h2>
                    <label>Anything else you'd like to add?</label>
                    <input type="text" 
                    placeholder='Optional'
                    name="special" 
                    id="special-text"
                    // value={
                    onChange={onChangeSpecial}
                    />

            </div>
            <button id="order-button" onSubmit={() => formSubmit()}>Add to Order</button>
    
    </form>  
    </div>  
       </>            
    )
}

export default Pizza;


