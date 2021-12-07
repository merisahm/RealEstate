import React, { useContext } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AuthContext } from '../contexts/AuthContext';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { NavMenu } from '../components/NavMenu';
import NewProperties from '../components/NewProperties';

export const Home = () => { 
  
  const { isAuthenticated } = useContext(AuthContext)
 
    return (
      <div>
        
        <NavMenu />
        <Banner
          height={45}
          heading='Najbolje ponude na jednom mestu!'
          subtitle='Kupovina je laksa uz Vas RealEstate.' 
        />

        <Container fluid>
          <Row>
            <Col md={9} className='bg-dark p-2'>
              <NewProperties />
            </Col>
            <Col md={3}>

            </Col>
          </Row>
        </Container>
        {!isAuthenticated ? <Banner
          height={40}
          heading='Registruj se sada'
          subtitle='i postani deo RealEstate zajednice!' 
        /> : ''}
        <Footer/>
      </div>
    );
  }
