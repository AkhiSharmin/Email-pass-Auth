import React, { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('')


    const handelSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
    }

    const handelEmailChange = (event) => {
        // console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handelPasswordBlur = (event) =>{
        // console.log(event.target.value)
    }


    return (
        <div>
            <h4>Please Register</h4>
            <form onSubmit={handelSubmit}>
                <input onClick={handelEmailChange} type='email' name='email' id='email' placeholder='Enter Your Email'/>
                <br />
                <input onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='Enter your Password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;