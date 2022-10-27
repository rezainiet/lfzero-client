import React from 'react';
import { HashLoader } from 'react-spinners'

const BigSpinner = () => {
    return (
        <div className='grid w-10 mx-auto h-screen content-center'>

            <div>
                <HashLoader
                    color="#ff8080"
                    cssOverride={{}}
                    size={60}
                    speedMultiplier={1}
                />
                <h2 className='text-white mt-3'>loading...</h2>
            </div>
        </div>
    );
};

export default BigSpinner;