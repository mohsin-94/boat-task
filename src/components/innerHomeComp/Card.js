import React from 'react'

function Card({value}) {
    return (
        <div className="col-sm-4">
            <div className="card card__bg p-4">
                <div className="card-body">
                    <h5 className="card-title primaryTextColor mb-4">{value}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
