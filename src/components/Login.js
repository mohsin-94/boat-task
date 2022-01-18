import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    const [inputVal,setInputVal] = useState({
        username: '',
        password: ''
    })
    const [userErr, setUserErr] = useState('');
    const jobId = 2;
    const changeHandler = (e) => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    const handleLoginToken = async (email,password) => {
       const response = await axios.post('https://jobs-api.squareboat.info/api/v1/auth/login', {
            email,
            password
        })
        return response;   
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        
        let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(inputVal.username === ''){
            setUserErr('Username is not blank')
        }else if(inputVal.password === ''){
            setUserErr('Password is not blank')
        }else if(!filter.test(inputVal.username)){
            setUserErr('Please enter valid email')
        }else{
            try{
            const {username,password} = inputVal;
            const response = await handleLoginToken(username,password)
            if(response.data.code == 422){
                alert('wrong email or passowrd')
                return
            }
            if(response.data.code == 200) {
                localStorage.setItem("user-loggedIn", response.data.data.email)
                navigate(`/jobs`)
                setUserErr('')
            }}
            catch(err){
                                alert('Wrong Email/Password')
            }
        }
    }
    
    return (
        <section>
            <div className="card card__login">
                <div className="card-block">
                    <div className="card-body">
                        <div className="login--form-card">
                            <h2 className='display-7'>Login</h2>
                            <form className="mt-3" onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="mb-2">
                                        Email address
                                    </label>
                                    <input type="text" name="username" id="username" className="form-control" value={inputVal.username} onChange={changeHandler} placeholder="Enter your email" />
                                </div>
                                <div className="form-group mb-3">
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="password" className="mb-2">Password</label>
                                        <div className="forgetpass text-right">
                                            <Link to={`/forgot`} className='primaryTextColor text-decoration-none'>Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <input type="password" name="password" id="password" value={inputVal.password} onChange={changeHandler} className="form-control" placeholder="Enter your password" />
                                    <div className='color-red text-right'>
                                        {userErr}
                                    </div>
                                </div>
                                <div className='text-center'>
                                    {/* <Link to={`/recruiters/jobs/${jobId}?id=jobs`} className="btn btn-outline-custom btn-custom px-5">Login</Link> */}
                                    <button type="submit" className="btn btn-outline-custom btn-custom px-5">Login</button>
                                </div>
                            </form>
                            <div className="mt-3">
                                <form className="mt-3 text-center signup_form" id="signup">
                                    <span>New to MyJobs?</span> &nbsp;
                                    <Link to={`/signup`} className='primaryTextColor text-decoration-none'>Create new account</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
