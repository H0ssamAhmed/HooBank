import React from 'react'
import qoute from '../assets/quotes.svg'


const TeamWord = ({ name, img, theWord }) => {
    return (
        <div className='Team-word p-4 d-flex flex-column hidden-left'>
            <img src={qoute} alt='qoute img' className='img-flulid qoute-img m-5 ms-0' />
            <p className='text-white-50 line-h-30'>{theWord}</p>
            <div className='row justify-content-start align-items-center'>
                <div className='col-4'>
                    <img src={img} alt='persont img' className='w-75 d-flex m-auto' />
                </div>
                <div className='col-8'>
                    <h5 className='text-white'>{name}</h5>
                    <p className='text-white-50'>Founder & Leader</p>
                </div>
            </div>

        </div>
    )
}

export default TeamWord