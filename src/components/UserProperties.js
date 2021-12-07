import React from 'react'
import PropertyCard from './PropertyCard'

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
    }
]

const UserProperties = () => {
    return (
        <div className='px-5'>
            <div className='py-2 px-5'>
            {allProperties.map(n =>
                <PropertyCard 
                    id={n.id}
                    name={n.name}
                    size={n.size}
                    price={n.price}
                    type={n.type}
                    owner={n.owner}
                    description={n.description}
                    imageUrl={n.imageUrl}
                    location={n.location}
                    premium={n.premium}
                />
            )};
            </div>
        </div>
    )
}

export default UserProperties
