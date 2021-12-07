import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const PropertyPanel = () => {
    const [allProps, setAllProps] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {        
        getAll();
    }, [])
    
    //================================ 

    const getAll = async () =>{
        const response = await axios.get("https://localhost:7042/properties");

        setAllProps(response.data);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    } 

    const removeProp = async (id) =>{
        if(window.confirm('Are you sure?')){
            await axios.delete(`https://localhost:7042/properties/${id}`);
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

    if(allProps.length === 0){
        return (
            <h4 className className='pt-3 text-center text-warning'>No properties available...</h4>
        )
    }

    return (
        <div className='container-fluid bg-light px-5'>
            <div className='w-100 px-2 my-2 bg-dark'>
                <table className='w-100 panel bg-light px-4'>
                    <thead className='py-3 my-2'>
                        <tr className='border-bottom bg-warning'>
                            <th className='pt-2 pb-2'></th>
                            <th className='pt-2 pb-2'>Slika oglasa</th>
                            <th className='pt-2 pb-2'>Naziv</th>
                            <th className='pt-2 pb-2'>Tip nekretnine</th>
                            <th className='pt-2 pb-2'>Lokacija</th>
                            <th className='pt-2 pb-2'>Velicina</th>
                            <th className='pt-2 pb-2'>Cena</th>
                            <th className='pt-2 pb-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProps.map(n=> 
                            <tr key={n.id} className='border-bottom py-2'>
                                <th></th>
                                <th><Link to={`/oglasi/${n.id}`}><img src='https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='110px' height='70px'/></Link></th>
                                <th>{n.name}</th>
                                <th>{n.type}</th>
                                <th>{n.location}</th>
                                <th>{n.size} m2</th>
                                <th>{n.price}</th>
                                <th><button onClick={() => removeProp(n.id)} className='btn btn-danger h-50'><VscChromeClose/></button></th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PropertyPanel
