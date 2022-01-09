import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development';


function Logout() {
    const [hide,setHide] = useState('')
    const getToken  =localStorage.getItem("user-loggedIn") 
    const userLoggedIn = getToken ? true : false;
    console.log(userLoggedIn)
    const hideAlert = () => {
        setHide('d-none')
    }
    useEffect(()=>{
        if(userLoggedIn){
            setHide('d-none')
        }else{
            setHide('')
        }
    },[])
    return (
        <>
            <div className={`alert alert-light ${hide}`}  role="alert">
                <h3 className='primaryTextColor display-8'><strong>Logout</strong></h3>
                You have successfully logged out.
                <button type="button" className="close" onClick={hideAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>
    )
}

export default Logout
