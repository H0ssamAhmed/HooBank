import React from 'react'
import { Container } from 'react-bootstrap'
import { Paragraph, Title } from '../../components'
import TeamWord from '../../components/TeamWord'
import people01 from '../../assets/people01.png'
import people02 from '../../assets/people02.png'
import people03 from '../../assets/people03.png'
import airbnb from '../../assets/airbnb.png'
import binance from '../../assets/binance.png'
import coinbase from '../../assets/coinbase.png'
import dropbox from '../../assets/dropbox.png'
import { ImgHoder } from '../../components'

const Clients = () => {
    return (
        <section className='client-rate pt-4 pb-4' id='clients'>
            <Container>
                <div className="row justify-content-center justify-content-md-evenly align-items-center">
                    <div className='col-md-5 hidden-left'>
                        <Title lineOne="What people are" lineTwo='saying about us' />
                    </div>
                    <div className='col-md-5 hidden-right'>
                        <Paragraph text='Everything you need to accept card payments and grow your business anywhere on the planet.' />
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-4 col-md-6 hidden-button '><TeamWord name='Herman Jensen' img={people01} theWord='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' /></div>
                    <div className='col-lg-4 col-md-6 hidden-top '><TeamWord name='Steve Mark' img={people02} theWord="Money makes your life easier. If you're lucky to have it, you're lucky." /></div>
                    <div className='col-lg-4 col-md-12 hidden-button '><TeamWord name='Kenn Gallagher' img={people03} theWord='It is usually people in the money business, finance, and international trade that are really rich.' /></div>
                </div>
                <div className='row companies text-center align-items-center justify-content-center justify-content-sm-between pt-5 hidden-left'>
                    <div className='col-8 col-sm-6 col-md-2 p-3'><ImgHoder imgSrc={airbnb} /></div>
                    <div className='col-8 col-sm-6 col-md-2 p-3'><ImgHoder imgSrc={binance} /></div>
                    <div className='col-8 col-sm-6 col-md-2 p-3'><ImgHoder imgSrc={coinbase} /></div>
                    <div className='col-8 col-sm-6 col-md-2 p-3'><ImgHoder imgSrc={dropbox} /></div>
                </div>
            </Container>
        </section>
    )
}

export default Clients