import React from 'react'

const paragraph = ({ text }) => {
    return (
        <div className='paragraph'>
            <p className='text-white-50  line-h-30'>{text}</p>
        </div>
    )
}

export default paragraph