import React, { useState } from 'react';

function Form() {
    const [user, setUser] = useState({username: "", email: "", role: "" })

    function trackChange(event) {
        const updatedUser =
        {...user, [event.target.name]: event.target.value };
        setUser(updatedUser)
    }
    function displaySubmit(event) {
        event.preventDefault();
        console.log('Username: ', user)
    }
    return(
        <form onSubmit={displaySubmit}>
            <fieldset>
                <legend>Here is the Team Form</legend>
                <div className="form-container">
                    <label htmlFor="username">
                        Name:
                        <div>
                            <input type="text" name="username" onChange={trackChange}/>
                        </div>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <div>
                            <input type="email" name="email" onChange={trackChange} />
                        </div>
                    </label>
                    <label htmlFor="role">
                        Role:
                        <div>
                            <select type="select" name ="role" onChange={trackChange}>
                                <option value="">Please Make A Selection</option>
                                <option value="front_end_dev">Front End Developer</option>
                                <option value="back_end_dev">Back End Developer</option>                                
                                <option value="full_stack_dev">Full Stack Developer</option>                                
                                <option value="data_analyst">Data Analyst</option>                                                                
                            </select>
                        </div>
                    </label>
                    <button type="submit">Submit</button>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;