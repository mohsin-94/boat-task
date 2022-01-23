import React,{useState, useEffect} from 'react'
import axios from 'axios'
import JobPostCard from './innerHomeComp/JobPostCard';
import Modal from './innerHomeComp/Modal';
import Pagination from './innerHomeComp/Pagination';

function JobsPosted() {
    const [data,setData] = useState([]);
    const [state,setState] = useState('d-none')
    const [jobId,setJobId] = useState('')
    const [showPerPage,setShowPerPage] = useState(6)
    const [pagination,setPagination] = useState({
        start: 0,
        end: showPerPage
    })
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhZDFlZTU5LWEyZDMtNDI2My1iNDljLTBlZmVkYWVlMzI1YiIsImVtYWlsIjoibW9oc2lua2hhbkBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6MCwibmFtZSI6Im1vaHNpbiIsInNraWxscyI6IkhUTUwsIENTUywgSlMiLCJ1cGRhdGVkQXQiOiIyMDIyLTAxLTEzVDEzOjQ5OjUxLjE0OFoiLCJjcmVhdGVkQXQiOiIyMDIyLTAxLTEzVDEzOjQ5OjUxLjE0OFoiLCJpYXQiOjE2NDIwODE3OTF9.VIR1A_4oGWBiaxfanaq4KpNu4Gh-4wvV1aDV5R9h2uI'
    useEffect(() => {
        axios.get('https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=1', {
            headers: {
                "Authorization": `${token}` 
            }
        })
        .then((responce) => {
            setData(responce.data.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    const clickViewHandel = (id) => {
        setState('show')
        setJobId(id)
    }
    const closeParentHandler = () => {
        setState('')
    }

    const onPaginationChange = (start,end) => {
        setPagination({
            start:start,
            end:end
        })
    }
    return (
        <>
            <div className='container position-relative'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h2 className='display-7 color-white mb-4'>Jobs posted by you</h2>
                    </div>
                    {data.slice(pagination.start,pagination.end).map(item => <React.Fragment key={item.id}><JobPostCard title={item.title} location={item.location} description={item.description} modalHandle={clickViewHandel} id={item.id}/></React.Fragment>)}
                </div>
                <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={data.length}/>
            </div>

            <Modal display={state} closeHandle={closeParentHandler} getJobId={jobId}/>
        </>
    )
}

export default JobsPosted
