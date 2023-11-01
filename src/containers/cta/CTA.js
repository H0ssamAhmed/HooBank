import React from 'react'
import './cta.css'
import { Container } from 'react-bootstrap';
import { MainBtn, Title } from '../../components';
const CTA = () => {
    return (
        <>
            <div className='CTA p-3 hidden-right'>
                <Container>
                    <div className='cta'>
                        <div className='row justify-content-between align-items-center '>
                            <div className='col-md-7'>
                                <Title lineOne='Come try our service now!' />
                                <p className='text-white-50'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                            </div>
                            <div className='col-md-3 pt-3'>
                                <MainBtn text='Get started' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default CTA;