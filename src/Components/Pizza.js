import React from "react";

export default function Pizza(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }


    return(
<>

        <h1>Build your Own Pizza</h1>
        
           {/* <div class="form">          */}
                <div class="customer-info">

                <form id="pizza-form">
                    <label for="fname">Customer's First Name:</label>
                    <input type="text" id="fname" name="firstName" /> <br/>
                    
                    <label for="lname">Customer's Last Name:</label>
                    <input type="text" id="lname" name="lastName" /> <br/>
                   
                    <label for="addy">Customer's Address:</label>
                    <input type="text" id="addy" name="address" /> <br/>
                    
                    <label for="cityzip">Customer's City and Zip Code:</label>
                    <input type="text" id="cityZip" name="cityzip" /> <br/> <br/>          
                {/* </div>          */}
                  <div className="pizza-size">
                      <h2>Choice of Size</h2>
                        <h3>Required</h3>
                        <label for="pizza-size">Select your size</label>
                            <select id="pizza-size" name="size">
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
                        // onChange={onChange}
                        // checked={values.sauce === 'original'}
                    />
                    </label> 

                    <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        // onChange={onChange}
                        // checked={values.sauce === 'garlicRanch'}
                    />
                    </label>

                    <label>BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq'
                        // onChange={onChange}
                        // checked={values.sauce === 'bbq'}
                    />
                    </label>     
                    
                    <label>Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        // onChange={onChange}
                        // checked={values.sauce === 'spinachAlfredo'}
                    />
                    </label>
                    </div>
                <div className="toppings">
                    <h2>Add Toppings</h2>
                    <h3>Choose up to 10</h3>

                    <label>Pepperoni
                        <input
                        type="checkbox"
                        name="pepperoni"
                        // checked=(values.pepperoni)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Sausage
                        <input
                        type="checkbox"
                        name="sausage"
                        // checked=(values.sausage)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Canadian Bacon
                        <input
                        type="checkbox"
                        name="canadianbacon"
                        // checked=(values.canadianbacon)
                        // onChange={onChange}
                        />
                    </label>
                        <label>Spicy Italian Sausage
                        <input
                        type="checkbox"
                        name="spicyitalsaus"
                        // checked=(values.spicyitalsaus)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Grilled Chicken
                        <input
                        type="checkbox"
                        name="grilledchix"
                        // checked=(values.grilledchix)
                        // onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                        type="checkbox"
                        name="onions"
                        // checked=(values.onions)
                        // onChange={onChange}
                        />
                    </label>
                        <label>Green Peppers
                        <input
                        type="checkbox"
                        name="greenpeppers"
                        // checked=(values.greenpeppers)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Diced Tomatoes
                        <input
                        type="checkbox"
                        name="tomatoes"
                        // checked=(values.tomatoes)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Black Olives
                        <input
                        type="checkbox"
                        name="olives"
                        // checked=(values.olives)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Roasted Garlic
                        <input
                        type="checkbox"
                        name="garlic"
                        // checked=(values.garlic)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Artichoke Hearts
                        <input
                        type="checkbox"
                        name="artichoke"
                        // checked=(values.artichoke)
                        // onChange={onChange}
                        />
                    </label>
                        <label>Three Cheese
                        <input
                        type="checkbox"
                        name="3cheese"
                        // checked=(values.3cheese)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Pineapple
                        <input
                        type="checkbox"
                        name="pineapple"
                        // checked=(values.pineapple)
                        // onChange={onChange}
                        />
                    </label>

                        <label>Extra Cheese
                        <input
                        type="checkbox"
                        name="xtracheese"
                        // checked=(values.xtracheese)
                        // onChange={onChange}
                        />
                    </label>


                </div>

                </form>

            <div className="special-instructions">
                <h2>Special Instructions</h2>
                <label for="special instructions">
                    <textarea name="anythingelse" rows="10" cols="100">Anything else you'd like to add?
                    </textarea>
                </label>
            </div>
            <button id="order-button">Add to Order</button>
                </div>        
       </>            
    )
}

