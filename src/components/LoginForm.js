import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ idno: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>): ""}
                <div className='form-group'>
                    <label htmlFor='name'>Student ID No:</label>
                    <input type="text" name="idno" id="idno" onChange={e => setDetails({ ...details, idno: e.target.value })} value={details.name}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.name}></input>
                </div>
                <input type="submit" value="SUBMIT" />
                <input type="submit" value="CANCEL" />

            </div>
        </form>
    )
}

export default LoginForm