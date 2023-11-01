import React, { useEffect } from 'react'
import './footer.css'
import { Container } from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import { ImgHoder, List, Paragraph } from '../../components'
import Date from './Data.json'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
const Footer = () => {
    const media = [facebook, instagram, twitter, linkedin,]

    useEffect(() => console.log(), [])
    return (
        <footer className='text-white pt-5 pb-5'>
            <Container>
                <div className='row align-items-start justify-content-around'>
                    <div className='col-sm-6 col-lg-2 hidden-right '>
                        <ImgHoder imgSrc={logo} />
                        <p className='text-white-50 pt-4'>A new way to make payments easy, reliable and secure.</p>
                    </div>
                    <div className='col-sm-6 col-lg-2 hidden-left'>
                        <h5>usefull Links</h5>
                        <List arr={Date.UsefullLinks} />
                    </div>
                    <div className='col-sm-6 col-lg-2 hidden-right'>
                        <h5>Content</h5>
                        <List arr={Date.Content} />
                    </div>
                    <div className='col-sm-6 col-lg-2 hidden-left'>
                        <h5>Partner</h5>
                        <List arr={Date.Partner} />
                    </div>
                </div>
                <hr />
                <div className='row align-items-center justify-content-between'>
                    <div className='col-md-3'>
                        <Paragraph text='2023 HooBank. All Rights Reserved.' />
                    </div>
                    <div className='col-md-3'>
                        <div className=' social-media d-flex align-items-center justify-content-center gap-3'>
                            {media.map((icon, index) => {
                                return <a href='home' className={'icon'} key={index}><img src={icon} alt={`${icon} icon`} /></a>
                            })}
                        </div>
                    </div>

                </div>


            </Container>
        </footer>
    )
}

export default Footer