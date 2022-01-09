import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [inputVal,setInputVal] = useState({
        fullName: '',
        emailAddress: '',
        createPassword: '',
        confirmPassword: '',
        skills: ''
    })
    const changeHandler = (e) => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setInputVal({
            fullName: '',
            emailAddress: '',
            createPassword: '',
            confirmPassword: '',
            skills: ''
        })
    }
    const loginId = 3;
    return (
        <section>
            <div className="card card__login">
                <div className="card-block">
                    <div className="card-body">
                        <div className="login--form-card">
                            <h2 className='display-7'>Signup</h2>
                            <form className="mt-3" onSubmit={submitHandler}>
                                <div className="form-group mb-3">
                                    <label className="mb-2">
                                        I’m a*
                                    </label>
                                    <div>
                                        <button type='button' className="btn btn-outline-custom btn-custom mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                        </svg> Recruiter 
                                        </button>
                                        <button type='button' className="btn btn-outline-custom btn-secondery">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg> Candidate 
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="fullName" className="mb-2">
                                        Full name*
                                    </label>
                                    <input type="text" name="fullName" id="fullName" className="form-control" value={inputVal.fullName} onChange={changeHandler} placeholder="Enter your full name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="emailAddress" className="mb-2">Email address*</label>
                                    <input type="text" name="emailAddress" id="emailAddress" value={inputVal.emailAddress} className="form-control" onChange={changeHandler} placeholder="Enter your Email address" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="createPassword" className="mb-2">Create Password*</label>
                                        <input type="text" id="createPassword" name="createPassword" value={inputVal.createPassword} className="form-control" onChange={changeHandler} placeholder="Enter your password" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="confirmPassword" className="mb-2">Confirm Password*</label>
                                        <input type="text" id="confirmPassword" name="confirmPassword" value={inputVal.confirmPassword}  className="form-control" onChange={changeHandler} placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="skills" className="mb-2">Skills</label>
                                    <input type="text" name="skills" id="skills" value={inputVal.skills} className="form-control" onChange={changeHandler} placeholder="Enter comma separated skills" />
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className="btn btn-outline-custom btn-custom px-5">Signup</button>
                                </div>
                            </form>
                            <div className="mt-3">
                                <form className="mt-3 text-center signup_form" id="signup">
                                    <span>Have an account?</span> &nbsp;
                                    <Link to={`/login`} className="primaryTextColor text-decoration-none">Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
