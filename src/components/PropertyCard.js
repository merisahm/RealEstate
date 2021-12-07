import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import { VscHeart, VscSearch, VscLocation } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const PropertyCard = (props) => {
    const { id ,name, size, price, description, imageUrl, location, type, /*filter*/ } = props;
    
    //if(filter === ""){
    return (
        <div className='bg-light my-5 my-md-3'>
            <Container fluid>
                <Row>
                    <Col md={5}>
                        <Link to={`/oglasi/${id}`}>
                            <div className='position-relative'>
                                <img src={imageUrl} className='propCardImg'/>
                            </div>
                        </Link>
                    </Col>
                    <Col md={7}>
                        <div className='h-100 pt-2 propInfo bg-light px-4'>
                            <h3 className='propName mainColor pt-2'>{name}</h3>
                            <h6 className='propType'>{type}</h6>
                            <h5 className='propLocation'>{location}<VscLocation style={{marginBottom:"5px"}}/> </h5>
                            <h5 className='propSize'>{size} m2</h5>
                            <p className='propDesc'>Opis: {description}</p>
                            <p className='pb-2'>Prodaja/Izdavanje : Prodaja</p>
                            <h4 className='propPrice text-right w-100'>Cena: {price}</h4>
                            
                            <Link to={`/oglasi/${id}`} className='btn mainBg propCardIcon'>
                                <VscSearch />
                            </Link>
                            <button className='btn propCardIconBtn'>
                                <VscHeart />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}
    // else if(name.toString().toLowerCase().includes( filter.toLowerCase())){
    //     return (
    //         <div className='bg-light my-5 my-md-3'>
    //             <Container fluid>
    //                 <Row>
    //                     <Col md={5}>
    //                         <Link to={`/oglasi/${id}`}>
    //                             <div className='position-relative'>
    //                                 <img src={imageUrl} className='propCardImg'/>
    //                             </div>
    //                         </Link>
    //                     </Col>
    //                     <Col md={7}>
    //                         <div className='h-100 pt-2 propInfo bg-light px-4'>
    //                             <h3 className='propName mainColor pt-2'>{name}</h3>
    //                             <h6 className='propType'>{type}</h6>
    //                             <h5 className='propLocation'>{location}<VscLocation style={{marginBottom:"5px"}}/> </h5>
    //                             <h5 className='propSize'>{size} m2</h5>
    //                             <p className='propDesc'>Opis: {description}</p>
    //                             <p className='pb-2'>Prodaja/Izdavanje : Prodaja</p>
    //                             <h4 className='propPrice text-right w-100'>Cena: {price}</h4>
                                
    //                             <Link to={`/oglasi/${id}`} className='btn mainBg propCardIcon'>
    //                                 <VscSearch />
    //                             </Link>
    //                             <button className='btn propCardIconBtn'>
    //                                 <VscHeart />
    //                             </button>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </div>
    //     )}
    // else return null;}

export default PropertyCard
