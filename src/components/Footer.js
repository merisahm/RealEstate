import React from 'react'
import { Col, Row } from 'reactstrap'
import Logo from '../logo.png'

const Footer = () => {
    return (
        <div className='bg-light border-top'>
            <Row className=' pt-3 m-0'>
                <Col md={3} className='d-flex justify-content-center flex-column px-5 align-items-center'>
                    <img src={Logo} className='img-fluid px-5'/>
                </Col>
                <Col md={3} className=''>
                    <h6 className='bg-light text-dark text-center border-bottom mx-5 pb-2 m-0 pt-3'>O nama:</h6>
                    <p className='px-5 mx-2 pt-3' style={{lineHeight:'17.5px',fontSize:'0.95rem'}}>RealEstate je moderan portal za prodaju nekretnina koji Vam omogucava da besplatno promovisete svoju nekretninu ili pronadjete odgovarajucu medju objavljenim.</p>
                </Col>
                <Col md={3}>
                    <h6 className='bg-light text-dark text-center border-bottom mx-5 pb-2 m-0 pt-3'>Mapa sajta:</h6>
                    <h6 className='bg-light text-dark m-0 pb-1 pt-3 text-center'>Pocetna</h6>
                    <h6 className='bg-light text-dark m-0 pb-1 text-center'>Oglasi</h6>
                    <h6 className='bg-light text-dark m-0 pb-1 text-center'>Page 404</h6>
                    <h6 className='bg-light text-dark m-0 pb-1 text-center'>Page 404</h6>
                    <h6 className='bg-light text-dark m-0 pb-3 text-center'>Page 404</h6>
                </Col>
                <Col md={3}>
                    <h6 className='bg-light text-dark text-center border-bottom mx-5 pb-2 m-0 pt-3'>Tehnicka podrska:</h6>
                    <h6 className='bg-light text-dark m-0 pb-3 pt-3 text-center'>+381 62 826 4606</h6>
                </Col>
            </Row>
            <Row className=' mt-3 m-0'>
                <Col xs={12}>
                    <h6 className='bg-dark text-white text-center m-0 py-3'>Copyright Ⓒ 2021 <span className='mainColor'>LINKEDTeam</span><br /> Sva prava zadržana</h6>
                </Col> 
            </Row>
        </div>
    )
}

export default Footer
