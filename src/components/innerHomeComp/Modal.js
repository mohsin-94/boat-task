import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Application from './Application';

function Modal({ display, closeHandle }) {
    const closeModalHandler = () => {
        closeHandle()
    }

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
                        <div className='mb-2'>Total 35 applications</div>
                        <div className='row grayBg'>
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
                            <Application />
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