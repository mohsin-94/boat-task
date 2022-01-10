import React from 'react'

function Application() {
    return (
        <div className="col-sm-6 mb-4">
            <div className="card border-gray">
                <div className="card-body">
                    <div className='d-flex mb-1'>
                        <div className="d-inline-block profile mr-2">
                            <span className="profileSec">M</span>
                        </div>
                        <div>
                            <h5 className="card-title">Eliza Lucas</h5>
                            <p className="card-text secondaryTextColor">abc123@email.com</p>
                        </div>
                    </div>
                    <h6 className='display-9'>Skills</h6>
                    <p className="card-text secondaryTextColor">Coding, designing, graphics, website, app ui</p>
                </div>
            </div>
        </div>
    )
}

export default Application
