import React, { useContext, useRef, useState } from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import Banner from '../components/Banner';
import AllProperties from '../components/AllProperties';
import Footer from '../components/Footer';
import { NavMenu } from '../components/NavMenu';
import { AuthContext } from '../contexts/AuthContext';
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
const PropertySale = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [nameValue, setName] = useState('');

    const elementRef = useRef();

    const setfilter = (e) =>{
        setName(elementRef.current.value);
        console.log(nameValue);
    }

    return (
        <div>
            <NavMenu />
            <Banner
            height={35}
            heading='Pregled svih oglasa'
            subtitle='' 
            />

            <Container fluid className='position-relative'>
            <Row>
                <Col md={3} className='position-relative'>
                    <div className='p-2 position-sticky sticky-top'>
                        <button className='btn-danger rounded w-100 p-1 text-white text-center'>Pretrazi</button>
                        <form className='form-group p-2 border rounded'>
                            <div className='bg-light rounded mb-2'>
                                <input type='text' placeholder='Unesite naziv...' value={nameValue} ref={elementRef} onChange={(e) => setfilter()} style={{border:'none',}} className='px-2 py-1 border-bottom w-100'/>
                            </div>
                            <div className='bg-light rounded mb-2'>
                                <button className='btn-light btn w-100 text-left' style={{textAlign:'left'}}>Kategorije</button><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Stanovi</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Kuce</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Poslovni objekti</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Kuca</label><br/>
                            </div>
                            <div className='bg-light rounded mb-2'>
                                <button className='btn-light btn w-100 text-left' style={{textAlign:'left'}}>Prodaja/Izdavanje</button><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Prodaja</label>
                                <br/>
                                <input type='checkbox' className='mx-3 mb-3'/>
                                <label>Izdavanje</label>
                                <br/>
                            </div>
                            <div className='bg-light rounded mb-2'>
                                <button className='btn-light btn w-100 text-left' style={{textAlign:'left'}}>Cena</button><br/>
                                <div className='d-flex'>
                                    <input className=' mb-3' style={{marginLeft:'10px', width:'132.5px'}} type='text' placeholder='Cena od...'/>
                                    <input className=' mb-3' style={{marginLeft:'10px', width:'132.5px'}} type='text' placeholder='Cena do...'/>
                                </div>
                            </div>
                            <div className='bg-light rounded pb-2 mb-2'>
                                <button className='btn-light btn w-100 text-left' style={{textAlign:'left'}}>Lokacije</button><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Beograd</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Novi Sad</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Kraljevo</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Nis</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Novi Pazar</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Subotica</label><br/>
                                <input type='checkbox' className='mx-3'/>
                                <label>Kragujevac</label><br/>
                            </div>
                            <input type='submit' value='Ponisti filtere' className='btn btn-warning mb-2 text-white w-100'/>
                        </form>
                    </div>
                </Col>
                <Col md={9} className='bg-dark p-2'>
                    <AllProperties allProps={allProperties} filterName={nameValue}/>
                </Col>
            </Row>
            </Container>
            {!isAuthenticated ? 
                <Banner
                    height={40}
                    heading='Registruj se sada'
                    subtitle='i postani deo RealEstate zajednice!'/> 
                : ''
            }
            <Footer />
        </div>
    )
}

export default PropertySale
