import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
import { NavMenu } from '../components/NavMenu';
import UserProperties from '../components/UserProperties'

const UserDetails = () => {
    const [showProps, setShowProps] = useState(true);
    const [user, setUser] = useState({
        id: 1,
        name: 'John',
        lastName: 'Doe',
        adress: 'New York, USA',
        mail: 'johndoe@yahoo.com',
        registrationDate:'25.04.2021.',
        description:'This is just some dummy text here. You may think this user is just a robot, but that is not the case. He just does not know what to say about himself, so hes wrote this dummy text. What does the fox say. Lately I have been, I have been losing sleep. Dreaming about the thing that we could be.',
        phoneNum: '29610392',
        isAdmin: false,
        imageUrl: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })

    const showProperties = () =>{
        setShowProps(true);
    }
    
    const showContactForm = () =>{
        setShowProps(false);
    }

    const sendMail = () =>{
        alert('Mail has been sent!');
    }
    return (
        <div>
            <NavMenu />
            <Container className='py-3 bg-light my-3'>
                <Row>
                    <Col md='3'>
                        <img src={user.imageUrl} className='image-fluid rounded' width='100%' height='350px' />
                    </Col>
                    <Col md='1'>
                        
                    </Col>
                    <Col md='7'>
                        <h2 className='border-bottom border-dark mb-4 pb-2'>{user.name} {user.lastName}</h2>
                        <Row>
                            <Col md={6}>
                                <h4><span className='mainColor'>E-mail:</span> {user.mail}</h4>
                                <h4><span className='mainColor'>Adresa:</span> {user.adress}</h4>
                                <h4><span className='mainColor'>Broj telefona:</span> {user.phoneNum}</h4>
                                <h4><span className='mainColor'>Korisnik od:</span> {user.registrationDate}</h4>
                            </Col>
                            <Col md={6}>
                                <h4><span className='mainColor'>E-mail:</span> {user.mail}</h4>
                                <h4><span className='mainColor'>Adresa:</span> {user.adress}</h4>
                                <h4><span className='mainColor'>Broj telefona:</span> {user.phoneNum}</h4>
                                <h4><span className='mainColor'>Korisnik od:</span> {user.registrationDate}</h4>
                            </Col>
                            <Col>
                                <p className='pt-4'><span className='mainColor'>Opis:</span> {user.description}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <button onClick={showProperties} className={showProps ? 'btn mainBg' : 'btn'}>Oglasi</button>
                <button onClick={showContactForm} className={!showProps ? 'btn mainBg' : 'btn'}>Kontakt</button>
                {showProps ? 
                    <Container fluid className='py-5 bg-dark'>
                        <UserProperties />
                    </Container>
                    :
                    <Container  fluid className='py-5 bg-dark'>
                        <div className='p-4 d-flex flex-column justify-content-center align-items-center'>
                            <h3 className='text-light pb-3'>Kontakt forma</h3>
                            <input type='text' className='w-50' placeholder='Predmet poruke...'></input>
                            <textarea className='p-2 w-50 mt-2' style={{minHeight:'200px'}}></textarea>
                            <button className='btn mb-3 mainBg w-50 mt-2' onClick={sendMail}>Posalji</button>
                        </div>
                    </Container>
                }
            </Container>

            <Footer />
        </div>
    )
}

export default UserDetails
