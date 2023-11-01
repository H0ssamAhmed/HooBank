import React from 'react'

const Nums = ({ num, text }) => {

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <h4 className='text-gradient p-0 m-0 fs-30 fw-bold'>{num}</h4>
            <p className='p-0 m-0 ms-2 fs-20'>{text}</p>
        </div>
    )
}

export default Nums