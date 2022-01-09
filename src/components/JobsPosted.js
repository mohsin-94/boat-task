import React,{useState, useEffect} from 'react'
import axios from 'axios'
import JobPostCard from './innerHomeComp/JobPostCard';

function JobsPosted() {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get('https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=2')
        .then((responce) => {
            setData(responce.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='display-7 color-white mb-4'>Jobs posted by you</h2>
                </div>
                {data.map(item => <React.Fragment key={item.id}><JobPostCard title={item.title} location={item.location} description={item.description}/></React.Fragment>)}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ul className='paginate'>
                        <li><span>🢐</span></li>
                        <li className="active">1</li>
                        <li><span>🢒</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JobsPosted
