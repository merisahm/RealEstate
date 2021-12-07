import React from 'react'
import { PaginationItem } from 'reactstrap';

const Pagination = (props) => {
    const {total, propNum, paginate} = props;
    const pages = [];

    for(let i=1;i<=Math.ceil(total / propNum); i++){
        pages.push(i);
    }

    return (
        <div className='d-flex justify-content-center align-items-center pb-3'>
            <ul className='pagination'>
                {pages.map(n => 
                    <li key={n} className='page-item'>
                        <button href='' style={{border:'1px solid black'}} onClick={() => paginate(n)} className='page-link border-none mainBg text-dark'>{n}</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Pagination
