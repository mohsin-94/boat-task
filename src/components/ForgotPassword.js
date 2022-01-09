import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    const [inputVal,setInputVal] = useState({
        emailAddress: ''
    })
    const changeHandler = (e) => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = e => {
        e.preventDefault();
        setInputVal({
            emailAddress: ''
        })
    }
     return (
        <section>
            <div className="card card__login">
                <div className="card-block">
                    <div className="card-body">
                        <div className="login--form-card">
                        <h2 className='display-7'>Forgot your password?</h2>
                        <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                            <form className="mt-3" onSubmit={submitHandler}>
                                <div className="form-group mb-3">
                                    <label htmlFor="emailAddress" className="mb-2">
                                        Email address
                                    </label>
                                    <input type="text" name="emailAddress" id="emailAddress" className="form-control" value={inputVal.emailAddress} onChange={changeHandler} placeholder="Enter your email" />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-outline-custom btn-custom px-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
