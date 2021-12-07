import React from 'react'
import { useParams } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import Footer from '../components/Footer';
import { VscCallOutgoing, VscHeart } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { NavMenu } from '../components/NavMenu';

const allProperties = [
    {
        id: 1,
        name: 'Tropical Hotel', 
        type: 'Hotel', 
        size: 765,
        price: 125000,
        owner: 'John Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Miami, Florida, USA',
        premium: true,
    },
    {
        id: 2,
        name: 'Dreams Apartment T2C',
        type: 'Apartman',
        size: 75,
        price: 115000,
        owner: 'Andrew Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'New York City, USA',
        premium: false
    },
    {
        id: 3,
        name: 'Donovan Villa',
        type: 'Vila',
        size: 507,
        price: 750000,
        owner: 'Josh Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Los Angeles, California, USA',
        premium: true
    },
    {
        id: 4,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 5,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 6,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 7,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 8,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 9,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 10,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 11,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 12,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 13,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 14,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 15,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 16,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 17,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        location: 'Sacramento, California, USA',
        premium: false
    },
    {
        id: 18,
        name: 'Morisson Double-Family House',
        type: 'Porodicna Kuca',
        size: 490,
        price: 520000,
        owner: 'Edward Doe',
        description: 'This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it. This is some dummy text which is going to realy freak you out sometimes, but you never know when you are going to get used to it.',
        imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        location: 'Sacramento, California, USA',
        premium: false
    }
]

const PropertyDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <NavMenu />
            <Container className='py-4'>
                <Row className='d-flex align-items-center'>
                    <Col md={6}>
                        <img src={allProperties[id-1].imageUrl} className='py-5 img-fluid'/>
                    </Col>
                    <Col md={6} className='bg-white px-3 py-2'>
                        <div className='p-2 bg-dark h-100 rounded'>
                            <h2 className='px-5 py-2 text-center mainColor'>{allProperties[id-1].name}</h2>
                            <div className='px-3 pt-2 mx-2 border-top border-light'>
                                <h5 className='text-white pt-1'><span className='mainColor'>Vrsta nekretnine:</span> {allProperties[id-1].type}</h5>
                                <h5 className='text-white pt-1'><span className='mainColor'>Lokacija:</span> {allProperties[id-1].location}</h5>
                                <p className='text-white pt-1'><span className='mainColor'>Opis:</span> {allProperties[id-1].description}</p>
                                <h5 className='text-white pt-1'><span className='mainColor'>Kvadratura:</span> {allProperties[id-1].size} kvadrata</h5>
                                <h4 className='text-white pt-1'><span className='mainColor'>Cena:</span> {allProperties[id-1].price}</h4>
                                <div className='pt-3 pb-3'>
                                    <Link to='/korisnik/id' className='btn mainBg px-2'>Kontakt  <VscCallOutgoing style={{marginBottom:'2.5px'}}/></Link>
                                    <button className='btn mainBg px-2 ml-3 mx-2'>Favorit  <VscHeart style={{marginBottom:'2.5px'}}/></button>
                                </div> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={1} className='bg-light'>
                    </Col>
                    <Col md={10} className='bg-light p-4 pb-5'>
                        <h4 className='text-center pb-4 border-bottom'>Kontakt informacije vlasnika</h4>
                        <Row>
                            <Col md={5} className='pt-5 d-flex justify-content-center'>
                                <img src='https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='170px' height='200px' />
                            </Col>
                            <Col md={3} className='pt-3 d-flex flex-column align-items-start justify-content-center'>
                                <h5><span className=''>Ime:</span> John Doe</h5>
                                <h5><span className=''>Adresa:</span> New York, USA</h5>
                                <h5><span className=''>Broj:</span> +381628264606</h5>
                            </Col>
                            <Col md={4} className='pt-3 d-flex flex-column align-items-center justify-content-center'>
                                <button className='btn mainBg mx-3 px-2 mb-3' style={{width:'220px'}}>Posalji mail</button>
                                <Link to='/korisnik/id' className='btn mainBg px-2 mx-3' style={{width:'220px'}}>Pogledaj objave korisnika</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} className='bg-light'>
                    </Col>
                    <Col className='pt-2 bg-light'></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default PropertyDetails
