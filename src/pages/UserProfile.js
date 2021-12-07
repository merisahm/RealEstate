import React, {useState} from 'react'
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import { NavMenu } from '../components/NavMenu'
import PropertyPanel from '../components/PropertyPanel';
import UserPanel from '../components/UserPanel';

const UserProfile = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [adminAllProps, setAdminAllProps] = useState(false)

    const showAllToAdmin = () =>{
        setAdminAllProps(!adminAllProps);
    }

    return (
        <div>
            <NavMenu />
            {/* <Container className='py-2 mt-1 text-center mainBg px-5'>
                <h2 className='py-2'>Ermin Bronja</h2>
                <h4>Datum registracije: 11.25.2021.</h4>
                <h4>Broj postavljenih oglasa: 17</h4>
            </Container> */}
            <h3 className='text-center py-3 pt-4'>User</h3>
            <Container className='py-3 my-2 bg-dark mb-5'>
                <div className='border-bottom pb-2'>
                    <button className='btn text-light'>Moji oglasi</button>
                    <button className='btn text-light'>Dodaj</button>
                    {isAdmin ? 
                        <>
                            <button onClick={showAllToAdmin} className='btn text-light'>Svi oglasi</button>
                            <button className='btn text-light'>Korisnici</button>
                        </> : ''}
                        <button className='btn text-light'>Uredi profil</button>
                </div>
                {adminAllProps ?
                    <PropertyPanel/>
                    :
                    <UserPanel/>

                }

            </Container>
            <Footer />
        </div>
    )
}

export default UserProfile;