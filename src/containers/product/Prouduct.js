import React from 'react'
import './product.css'
import { Container } from 'react-bootstrap'
import bil from '../../assets/bill.png'
import { ImgHoder, Title, Paragraph, MainBtn } from '../../components'
import google from '../../assets/google.svg'
import apple from '../../assets/apple.svg'
import card from '../../assets/card.png'
const Prouduct = () => {
    return (
        <section className='prouduct' id='Product'>
            <Container>
                <div className='row justify-content-between align-items-center pb-4'>
                    <div className='col-lg-6 hidden-left'>
                        <ImgHoder imgSrc={bil} />
                    </div>
                    <div className='col-lg-5 hidden-right'>
                        <div>
                            <Title lineOne="Easily control your" lineTwo="billing & invoicing." />
                        </div>
                        <div className=''>
                            <Paragraph text="We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs." />
                        </div>
                        <div className='apps row'>
                            <img src={google} alt='' />
                            <img src={apple} alt='' />
                        </div>
                    </div>
                </div>

                <div className='row justify-content-between align-items-center pt-4'>
                    <div className='col-lg-5 hidden-right'>
                        <div>
                            <Title lineOne="Find a better card deal" lineTwo="in few easy steps" />
                        </div>
                        <div className=''>
                            <Paragraph text="We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website." />
                        </div>
                        <MainBtn text="get Start" />
                    </div>
                    <div className='col-lg-6 hidden-left'>
                        <ImgHoder imgSrc={card} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Prouduct