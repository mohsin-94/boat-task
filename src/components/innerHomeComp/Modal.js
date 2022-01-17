import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Application from './Application';
import axios from 'axios';

function Modal({display, closeHandle,getJobId}) {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const closeModalHandler = () => {
        closeHandle();
        setData([]);
        setLoading(true)
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhZDFlZTU5LWEyZDMtNDI2My1iNDljLTBlZmVkYWVlMzI1YiIsImVtYWlsIjoibW9oc2lua2hhbkBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6MCwibmFtZSI6Im1vaHNpbiIsInNraWxscyI6IkhUTUwsIENTUywgSlMiLCJ1cGRhdGVkQXQiOiIyMDIyLTAxLTEzVDEzOjQ5OjUxLjE0OFoiLCJjcmVhdGVkQXQiOiIyMDIyLTAxLTEzVDEzOjQ5OjUxLjE0OFoiLCJpYXQiOjE2NDIwODE3OTF9.VIR1A_4oGWBiaxfanaq4KpNu4Gh-4wvV1aDV5R9h2uI'
    useEffect(() => {
        getJobId !== '' && axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${getJobId}/candidates`, {
            headers: {
                "Authorization": `${token}` 
            }
        })
        .then(responce => {
            setLoading(false)
            setData(responce.data.data)
        }).catch(error => {
            console.log(error)
        })
    },[getJobId])
    return createPortal(<>
        <div className={`modal fade ${display}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Applicants for this job</h5>
                        <button type="button" className="close" onClick={closeModalHandler}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='mb-2'>Total applications: {data.length}</div>
                        <div className='row grayBg'>
                            {loading ? (<div className='text-center'>Loading Data</div>) : data.map(item => <React.Fragment key={item.id}><Application email={item.email} name={item.name} skills={item.skills} /></React.Fragment>)}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={display == 'show' ? 'modal-backdrop fade show' : 'd-none'} onClick={closeModalHandler}></div>
        </div>
    </>,
        document.getElementById('root__child')
    )
}

export default Modal