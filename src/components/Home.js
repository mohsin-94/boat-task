import React from 'react'
import Hero from './innerHomeComp/Hero'
import Logout from './innerHomeComp/Logout'
import WhyUs from './innerHomeComp/WhyUs'
function Home() {
    const getToken  =localStorage.getItem("user-loggedIn") 
    const userLoggedIn = getToken ? true :false;
    return (
        <div>
            <Logout show={userLoggedIn}/>
            <Hero />
            <WhyUs />
        </div>
    )
}

export default Home
