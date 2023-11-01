import React from 'react'

const ImgHoder = ({ imgSrc }) => {
    return (
        <div className='img-holder'>
            <img src={imgSrc} alt='img' className='img-fluid' />
        </div>
    )
}

export default ImgHoder