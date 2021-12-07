import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const UserPanel = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {        
        getAll();
    }, [])
    
    //================================ 

    const getAll = async () =>{
        const response = await axios.get("https://localhost:7042/users");

        setAllUsers(response.data);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    } 

    const removeUser = async (id) =>{
        if(window.confirm('Da li ste sigurni?')){
            await axios.delete(`https://localhost:7042/users/${id}`);
            alert('Succes!');
        }
    }

    //================================

    if(loading){
        return (
            <div className='d-flex py-3 pt-4 align-items-center justify-content-center'>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }

    if(allUsers.length === 0){
        return (
            <h4 className className='pt-3 text-center text-warning'>Nema registrovanih korisnika...</h4>
        )
    }

    return (
        <div className='container-fluid bg-light px-5'>
            <div className='w-100 px-2 my-2 bg-dark'>
                <table className='w-100 bg-light px-4'>
                    <thead className='py-3 my-2'>
                        <tr className='border-bottom bg-warning'>
                            <th className='py-3 px-2'></th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Korisnicko ime</th>
                            <th>E-mail</th>
                            <th>Telefon</th>
                            <th>Broj objava</th>
                            <th className=''></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map(n=> 
                            <tr key={n.id} className='border-bottom'>
                                <th className='py-2 px-2'></th>
                                <th>{n.firstName}</th>
                                <th>{n.lastName}</th>
                                <th>{n.username}</th>
                                <th>korisnik{n.id}@gmail.com</th>
                                <th>0628264606</th>
                                <th className='px-3'>{n.properties.length}</th>
                                <th><button onClick={() => removeUser(n.id)} className='btn m-1 btn-danger'><VscChromeClose/></button></th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPanel
