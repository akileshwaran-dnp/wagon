import { useState } from 'react';
import '../styles/login.css'
import Social from '../components/Social';
import {Navigate} from 'react-router-dom';
import pic from '../pictures/happy.png';

function Login () {
    const [isSubmitted, setIsSubmitted] =  useState (false);
    const [error, setError] = useState ("");
    const [uname, setUname] = useState("");

    const fetchUserCreds = async (name, pass) => {
        try {
            const api = await fetch(`https://62dd4fadccdf9f7ec2c48e96.mockapi.io/api/v1/users/${name}`);
            const data = await api.json();
            console.log ( data.pass );
            if ( data.pass === pass ) {
                setIsSubmitted(true);
                setUname(name);
            } else {
                setError ("Incorrect password");
            }
        } catch {
            setError ("Invalid username");
        }
    };

    function validateUserName (uname) {
        // uname must only contain alphabets, numbers and underscore
        const emailReg = /^\S+@\S+\.\S+$/;
        const unReg = /^A-Za-z0-9_$/;
        if (emailReg.test(uname) || unReg.test(uname) ) {
            return true;
        } else {
            return false;
        }
    };

    function validatePasscode (pass) {
        const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // min 8 characters must include Capital, small, number, symbol
        if ( passReg.test (pass) ) {
            return true;
        }
        return false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {uname, passcode} = document.forms[0];
        if ( validateUserName (uname.value) ) {
            if ( validatePasscode (passcode.value) ) {
                fetchUserCreds (uname.value, passcode.value);
            }  else {
                setError ("Password is not valid. Min characters" );
            }
        } else {
            setError ("Username is not valid")
        }
    };


    const renderForm =  (
        <div className='login-grid'>
            <div className="grid-item left-part">
                <h1 className='title-name'>Wagon</h1>
                <img src={pic} />
                <h4 className='quote'>Products with wheels...</h4>
            </div>
            <div className="grid-item right-part">
                <h3 className='title-head'>SIGN IN</h3>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" name='uname' required />
                    <input type="password" placeholder="passcode" name='passcode' required  />
                    <p className='for-pass'>Recover Password</p>
                    <input type="submit" value="Sign In" />
                </form>
                <hr /><p className='other-login'>------  or continue with  ------</p><hr />
                <Social />
                <div className='error'>
                    *{error}
                </div>
            </div>
        </div>
    );
    return (
        <div>
            {isSubmitted? <Navigate to={`/home?name=${uname}`} /> : renderForm}
        </div>
    );
}

export default Login;