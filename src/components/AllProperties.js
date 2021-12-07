import React, { useState } from 'react'
import Pagination from './Pagination';
import PropertyCard from './PropertyCard'

const AllProperties = (props) => {
    const { allProps, /*filterName*/ } = props;
    const [propNum, setPropNum] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexOfLast = currentPage * propNum;
    const indexOfFirst = indexOfLast - propNum;
    const currentProps = allProps.slice(indexOfFirst, indexOfLast);
    
    const paginate = (n) =>{
        setCurrentPage(n);
    }

    return (
        <div className='px-5'>
            <h4 className='text-center mainColor mx-5 py-3'>Svi oglasi:</h4>
            <div className='py-2 px-5'></div>
            {currentProps.map(n =>
                <PropertyCard 
                    id={n.id}
                    key={n.id}
                    name={n.name}
                    size={n.size}
                    price={n.price}
                    type={n.type}
                    owner={n.owner}
                    description={n.description}
                    imageUrl={n.imageUrl}
                    location={n.location}
                    //filter={filterName}
                />
            )};
            {allProps.length > propNum ?
                <Pagination total={allProps.length} propNum={propNum} paginate={paginate}/> : ''
            }
        </div> 
    )
}

export default AllProperties
