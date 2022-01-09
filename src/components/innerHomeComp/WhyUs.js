import React from 'react'
import Card from './Card'

function WhyUs() {
    return (
        <section className='whyUsSec py-5'>
            <div className='container'>
                <h2 className='title mb-4'>Why Us</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <Card value="Get more visibility"/>
                    <Card value="Organize your candidates"/>
                    <Card value="Verify their abilities"/>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
