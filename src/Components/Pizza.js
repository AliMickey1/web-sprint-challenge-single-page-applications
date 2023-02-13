import React from 'react';

const Pizza = (props) => {
    const { submit, change, disabled, errors } = props;


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value

        // change(name, valueToUse)
    }


    return(
<>

        <h1>Build your Own Pizza</h1>
        


            {/* <div className='errors'>
                <div>{errors.pizza-form}</div>
            </div> */}



                <div class="customer-info">

                <form id="pizza-form">
                    <label for="customerName">Customer's Name:</label>
                    <input type="text" 
                    name="name-input" 
                    id="name-input"
                    />

                  <div className="size-dropdown">
                      <h2>Choice of Size</h2>
                        <h3>Required</h3>
                        <label for="pizza-size">Select your size</label>
                            <select id="size-dropdown" name="size">
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
                        checked={'sauce' === 'original'}
                    />
                    </label> 

                    <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        onChange={onChange}
                        checked={'sauce' === 'garlicRanch'}
                    />
                    </label>

                    <label>BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq'
                        onChange={onChange}
                        checked={'sauce' === 'bbq'}
                    />
                    </label>     
                    
                    <label>Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        onChange={onChange}
                        checked={'sauce' === 'spinachAlfredo'}
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
                        onChange={onChange}
                        checked={'topping' === 'pepperoni'}

                        />
                    </label>

                        <label>Sausage
                        <input
                        type="checkbox"
                        value="sausage"
                        name='topping'
                        checked={'topping' === 'sausage'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Canadian Bacon
                        <input
                        type="checkbox"
                        value="canadianbacon"
                        name='topping'
                        checked={'topping' === 'canadianbacon'}
                        onChange={onChange}
                        />
                    </label>
                        <label>Spicy Italian Sausage
                        <input
                        type="checkbox"
                        value="spicyitalsaus"
                        name='topping'
                        checked={'topping' === 'spicyitalsaus'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Grilled Chicken
                        <input
                        type="checkbox"
                        value="grilledchix"
                        name='topping'
                        checked={'topping' === 'grilledchix'}
                        onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                        type="checkbox"
                        value="onions"
                        name='topping'
                        checked={'topping' === 'onions'}
                        onChange={onChange}
                        />
                    </label>
                        <label>Green Peppers
                        <input
                        type="checkbox"
                        value="greenpeppers"
                        name='topping'
                        checked={'topping' === 'greenpeppers'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Diced Tomatoes
                        <input
                        type="checkbox"
                        value="tomatoes"
                        name='topping'
                        checked={'topping' === 'tomatoes'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Black Olives
                        <input
                        type="checkbox"
                        topping="olives"
                        name='topping'
                        checked={'topping' === 'olives'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Roasted Garlic
                        <input
                        type="checkbox"
                        value="garlic"
                        name='topping'
                        checked={'topping' === 'garlic'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Artichoke Hearts
                        <input
                        type="checkbox"
                        value="artichoke"
                        name='topping'
                        checked={'topping' === 'artichoke'}
                        onChange={onChange}
                        />
                    </label>
                        <label>Three Cheese
                        <input
                        type="checkbox"
                        value="3cheese"
                        name='topping'
                        checked={'topping' === '3cheese'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Pineapple
                        <input
                        type="checkbox"
                        value="pineapple"
                        name='topping'
                        checked={'topping' === 'pineapple'}
                        onChange={onChange}
                        />
                    </label>

                        <label>Extra Cheese
                        <input
                        type="checkbox"
                        value="xtracheese"
                        name='topping'
                        checked={'topping' === 'xtracheese'}
                        onChange={onChange}
                        />
                    </label>


                </div>

                </form>

            <div className="special-text">
                <h2>Special Instructions</h2>
                <h3>Anything else you'd like to add?</h3>
                <label for="special=text">
                    <textarea id="special-text" 
                    rows="10" cols="100"
                    onChange={onChange}
                    />
                        
                    
                </label>
            </div>
            <button id="order-button">Add to Order</button>
                </div>        
       </>            
    )
}

export default Pizza;