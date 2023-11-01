import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import discount from '../../assets/Discount.svg'
import arrow from '../../assets/arrow-up.svg'
import robot from '../../assets/robot.png'
import './header.css'
import { ImgHoder, Nums, Paragraph } from '../../components'
// text-gradient text-white
const Header = () => {
    const [hoverBnt, setHoverBtn] = useState("text-gradient")
    return (
        <header className='header mt-5 d-flex align-items-center justify-content-center p-4 over-flow-hidden bg__Dark' id='Home'>
            <Container>
                <div className="row mt-5 align-items-center position-relative hidden-left">
                    <span className='blue__gradient-right'></span>
                    <div className='col-12 col-lg-6'>
                        <div className='discount d-flex align-items-center justify-content-start gap-2 bg-discount-gradient w-fit-content d-inline-block rounded'>
                            <img src={discount} alt='' />
                            <p className='m-0 text-white'><span className='fw-bold'>20% </span> Discount For <span className='fw-normal'>1 Month</span> Account</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-4 text-capitalize pt-4'>
                            <div className='heading text-white'>
                                <h1>the next
                                    <br />
                                    <span className='text-gradient'>generation</span>
                                    <br />
                                    payment method</h1>
                            </div>
                            <div
                                onMouseEnter={() => setHoverBtn('text-white')}
                                onMouseLeave={() => setHoverBtn("text-gradient")}
                                className={`get-started ${hoverBnt} cursor-pointer`}>
                                <div className='d-flex'>
                                    <p className='m-0'>Get</p>
                                    <img src={arrow} alt='' />
                                </div>
                                <p className='m-0'>Started</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <Paragraph text='Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <ImgHoder imgSrc={robot} />
                    </div>
                </div>
                <div className='row text-white justify-content-center hidden-right p-4'>
                    <div className='col-12 col-md-6 col-lg-4'> <Nums num="3800+" text="ACTIVE USERS" /></div>
                    <div className='col-12 col-md-6 col-lg-4'> <Nums num="230+" text="COMPANYS TRUSTED" /></div>
                    <div className='col-12 col-md-6 col-lg-4'> <Nums num="$230M+" text="TRANSACTIONS" /></div>
                </div>
            </Container>
        </header>
    )
}

export default Header