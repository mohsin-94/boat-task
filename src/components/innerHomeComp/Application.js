import React from 'react'

function Application({email,name,skills}) {
    return (
        <div className="col-sm-6 mb-4">
            <div className="card border-gray">
                <div className="card-body">
                    <div className='d-flex mb-1'>
                        <div className="d-inline-block profile mr-2">
                            <span className="profileSec">M</span>
                        </div>
                        <div>
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text secondaryTextColor">{email}</p>
                        </div>
                    </div>
                    <h6 className='display-9'>Skills</h6>
                    <p className="card-text secondaryTextColor">{skills}</p>
                </div>
            </div>
        </div>
    )
}

export default Application
