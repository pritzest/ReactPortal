import React from 'react'
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert';

function LoginForm() {

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-xs'>
                <form action="/homepage" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className="form-inner bg-white">
                        <h2 className='font-medium leading-tight text-3xl mt-0 mb-2 text-red-500 bg-white'>Login</h2>
                        <div className='form-group mb-4 bg-white'>
                            <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2 bg-white' >Student ID No:</label>
                            <input type="text" name="idno" id="idno" required className='bg-white shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'></input>
                        </div>
                        <div className='form-group bg-white'>
                            <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2 bg-white'>Password:</label>
                            <input type="password" name="password" id="password" required className='bg-white shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'></input>
                        </div>
                        <input type="submit" value="SUBMIT" className='shadow bg-red-400 hover:bg-red-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'/>
                        <input type="reset" value="CANCEL" className='shadow bg-red-800 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-2' />

                    </div>
                </form>
                <p><Link to="/register" className='block text-gray-700 text-sm font-bold mb-2 ' > Register here!</Link> </p>
            </div>
        </div>


    )
}

export default LoginForm