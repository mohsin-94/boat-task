import React,{useState, useEffect} from 'react'
import axios from 'axios'
import JobPostCard from './innerHomeComp/JobPostCard';

function JobsPosted() {
    const [data,setDate] = useState();
    useEffect(() => {
        axios.get('https://www.postman.com/collections/d8dead6a15e80c4b7a61')
        .then((responce) => {
            console.log(responce.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[data])
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='display-7 color-white mb-4'>Jobs posted by you</h2>
                </div>
                <JobPostCard value="UI UX Designer"/>
                <JobPostCard value="Front-end Designer"/>
                <JobPostCard value="Java Developer"/>
            </div>
        </div>
    )
}

export default JobsPosted
