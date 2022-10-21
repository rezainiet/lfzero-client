import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../assets/images/notfound.gif'
const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <Link to='/'>   <img src={notfound} alt="" /></Link>
        </div>
    );
};

export default NotFound;

