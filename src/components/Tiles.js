import React from 'react'

const Tiles = ({ imgSrc, title, text }) => {

    return (
        <div className='tiles d-flex align-items-center justify-content-start p-3 '>
            <div className='img' style={{ width: "70px" }}>
                <img src={imgSrc} alt="" className='img-fluid' />
            </div>
            <div className='text'>
                <h4>{title}</h4>
                <p className='text-white-50'>{text}</p>
            </div>
        </div>
    )
}

export default Tiles