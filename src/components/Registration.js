import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert';

import '../index.css'


export default function Registration() {
 
    return (
        <div className="text-center m-5-auto">
            <h2>Student Portal Registration</h2>
            <h5>Please input your details below</h5>
            <form action="/homepage">
                <p>
                    <label>Stundent ID Number</label><br/>
                    <input type="number" name="IDno" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lName" required />
                </p>
                <p>
                    <label>Given Name</label><br/>
                    <input type="text" name="gName" requiredc />
                </p>
                <p>
                    <label>Middle Name</label><br/>
                    <input type="text" name="mName" requiredc />
                </p>
                <p>
                    <label>College</label><br/>
                    <input type="text" name="college" requiredc />
                </p>
                <p>
                    <label>Program Enrolled</label><br/>
                    <input type="text" name="pEnroll" requiredc />
                </p>
                <p>
                    <label>Year Level</label><br/>
                    <input type="number" name="yLevel" requiredc />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input id="pass" type="password" name="pass" requiredc />
                </p>
                <p>
                    <label>Confim Password</label><br/>
                    <input id="cpass" type="password" name="cpass" requiredc />
                </p>                
                <p>
                <input id="reg_btn" type="submit" value="REGISTER"/>
                    <input id="can_btn" type="reset" value="CANCEL" />
                </p>
            </form>
            <footer>
                <h3>Already have an account?</h3>
                <p><Link to="/">Go to Login Page</Link></p>
            </footer>
        </div>
    )

}