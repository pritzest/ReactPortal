import React from 'react'
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert';

function LoginForm() {
    
    return (
        <div>
            
        <form action="/homepage">
            <div className="form-inner">
                <h2>Login</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Student ID No:</label>
                    <input type="text" name="idno" id="idno"required></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" required></input>
                </div>
                <input type="submit" value="SUBMIT" />
                <input type="reset" value="CANCEL" />

            </div>
        </form>
        <p><Link to="/register"> Register here!</Link> </p>
        </div>
        
    )
}

export default LoginForm