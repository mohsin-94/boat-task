import React, { useState } from 'react'
import {Link, useNavigate , useLocation} from 'react-router-dom'

function Header() {
    const [isActive, setIsActive] = useState(false)
    let Navigate = useNavigate();
    let location = useLocation();
    const getToken  =localStorage.getItem("user-loggedIn") 
    const userLoggedIn = getToken ? true :false;
    const handleLogout = () => {
        localStorage.setItem('user-loggedIn','')
        Navigate('/')
        setIsActive(false);
    }
    const handleLogin = () => {
        Navigate('/login')
    }
    const handleDropdown = () => {
        setIsActive(!isActive)
    }
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/boat-task">
                    My<span className='primaryTextColor'>Jobs</span>
                </Link>
                <div>
                    <ul className='navbar-nav me-auto mb-2 mb-md-0'></ul>
                    <form className="d-flex">
                        {!userLoggedIn && <button type='button' className="btn btn-outline-custom" onClick={handleLogin}>Login/Signup</button>}
                        {userLoggedIn && (
                            <div className='d-flex align-items-center position-relative'>
                                <Link to={`/jobs`} className='color-white post__link'>Post a Job</Link>
                                <div onClick={handleDropdown} className='d-inline-block profile'>
                                    <span className='profileSec'>{getToken.split('')[0].toUpperCase()}</span>
                                    <span className='profileArrow'>&#x1F893;</span>
                                </div>
                                <span className={`profileLogout ${isActive ? 'active' : ''}`} onClick={handleLogout}>Logout</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </nav>
        <div className={location.pathname !== '/boat-task' ? 'heroBg heroBgLogin': 'heroBg'}></div>
        <div className='container border__top position-relative'></div>
        {userLoggedIn && location.pathname !== '/boat-task' && (
            <div className='container'>
                <nav aria-label="breadcrumb" className='position-relative'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active color-white" aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
        )}
        
        
        </>
    )
}

export default Header
