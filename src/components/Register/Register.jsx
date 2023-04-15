import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handelSubmit = (event) => {
        //1. prevent page refresh
        event.preventDefault();
        setSuccess('');
        setError('');
        //2.collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

        //validate
        if(!/(?=.* [A-Z].)/.test(password)){
            setError('please add the at least one uppercase');
            return;
        }
        else if(!/(?=.* [0-9].*[0-9])/.test(password)){
            setError('please add the at least two Number');
            return;
        }

        else if(password.length<6){
            setError('Please add at least 6 charecters in your password');
            return;
        }


        //3.create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            event.target.reset();
            setSuccess('User has been created successfully')
        })
        .catch(error =>{
            console.error(error.message)
            setError(error.message)
        })
    }

    const handelEmailChange = (event) => {
        // console.log(event.target.value)
        // setEmail(event.target.value)
    }

    const handelPasswordBlur = (event) =>{
        // console.log(event.target.value)
    }


    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
            <form onSubmit={handelSubmit}>
                <input className='w-50 mb-4 rounded p-2' onClick={handelEmailChange} type='email' name='email' id='email' placeholder='Enter Your Email' required/>
                <br />
                <input className='w-50 mb-4 rounded p-2' onBlur={handelPasswordBlur} type="password" name="password" id="password" placeholder='Enter your Password' required/>
                <br />
                <input className='btn btn-primary ' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-primary'>{success}</p>
        </div>
    );
};

export default Register;