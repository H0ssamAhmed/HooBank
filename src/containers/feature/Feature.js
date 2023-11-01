import React from 'react'
import './feature.css'
import { Container } from 'react-bootstrap'
import { Paragraph, Title, MainBtn, Tiles } from '../../components'
import star from '../../assets/Star.svg'
import shild from '../../assets/Shield.svg'
import send from '../../assets/Send.svg'
export const Feature = () => {
    return (
        <section className='Feature pt-5' id='Features'>
            <Container>
                <div className='row text-white justify-content-between align-items-center gap-5'>
                    <div className='col-lg-6 hidden-right'>
                        <Title lineOne="You do the business," lineTwo="we'll handle the money." />
                        <div className='pb-5 '>
                            <Paragraph text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market." />
                        </div>
                        <MainBtn text="get Start" />
                    </div>
                    <div className='col-lg-5 hidden-left'>
                        <Tiles imgSrc={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
                        <Tiles imgSrc={shild} title='100% Secured' text='We take proactive steps make sure your information and transactions are secure.' />
                        <Tiles imgSrc={send} title='Balance Transfer' text='A balance transfer credit card can save you a lot of money in interest charges.' />
                    </div>
                </div>
            </Container>
        </section>
    )
}
