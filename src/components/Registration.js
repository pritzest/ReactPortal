import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-alert';

import '../index.css'


export default function Registration() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        alert('The details are being saved...');
        return navigate('/homepage')
    }
    return (
        <div className="flex justify-center items-center h-screen m-20">
            <div className='w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20'>
                <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-red-500">Student Portal Registration</h2>
                <h5 className=" leading-tight text-1xl mt-0 mb-2 text-black">Please input your details below</h5>
                <form className="" onSubmit={handleSubmit}>
                    <p className="">
                        <label className="block text-gray-700 text-sm font-bold mb-0">Student ID Number</label><br />
                        <input type="number" name="IDno" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0" >Last Name</label><br />
                        <input type="text" name="lName" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0" >Given Name</label><br />
                        <input type="text" name="gName" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0" >Middle Name</label><br />
                        <input type="text" name="mName" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0" >College</label><br />
                        <input type="text" name="college" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0">Program Enrolled</label><br />
                        <input type="text" name="pEnroll" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0">Year Level</label><br />
                        <input type="number" name="yLevel" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0">Password</label><br />
                        <input id="pass" type="password" name="pass" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <label className="block text-gray-700 text-sm font-bold mb-0">Confim Password</label><br />
                        <input id="cpass" type="password" name="cpass" required className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                    </p>
                    <p>
                        <input id="reg_btn" type="submit" value="REGISTER" className='shadow bg-red-400 hover:bg-red-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'/>
                        <input id="can_btn" type="reset" value="CANCEL" className='shadow bg-red-800 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-2'/>
                    </p>
                </form>
                <footer>
                    <h3 className="block text-gray-700 text-sm font-bold mb-2">Already have an account?</h3>
                    <p className="block text-gray-700 text-sm font-bold mb-2"><Link to="/">Go to Login Page</Link></p>
                </footer>
            </div>
        </div>
    )

}