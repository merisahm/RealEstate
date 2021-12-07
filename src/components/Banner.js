import React from 'react';
import Bg from '../bannerBg.jpeg'; 

const Banner = (props) => {
    const { heading, subtitle, height } = props;

    return (
        <div style={{height:`${height}vh`,background:`url(${Bg})`,backgroundPosition:'center',backgroundSize:'cover'}} className='customBanner container-fluid bg-light'>
            <div style={{background:'rgba(25,25,25,0.65)'}} className='w-100 h-100 d-flex rounded justify-content-center align-items-center flex-column p-2 px-4'>
                <h2 className='mainColor'>{heading}</h2>
                {subtitle !== '' ? <h4 className='text-white'>{subtitle}</h4> : null}
            </div>
        </div>
    )
}

export default Banner
