import React from 'react';
import partner1 from './../../../../assets/images/icons/partners/box-dark.svg'
import partner2 from './../../../../assets/images/icons/partners/eventbrite-dark.svg'
import partner3 from './../../../../assets/images/icons/partners/nasdaq-dark.svg'
import partner4 from './../../../../assets/images/icons/partners/netapp-dark.svg'
import partner5 from './../../../../assets/images/icons/partners/tcs-dark.svg'
import partner6 from './../../../../assets/images/icons/partners/volkswagen-dark.svg'

const Partners = () => {
    return (
        <div className='bg-gray-300 bg-opacity-60 py-12'>
            <div>
                <div className="text-center ">
                    <h1 className="text-[#5D10E3] text-2xl font-bold">
                        Partners
                    </h1>
                </div>
                <div>
                    <p className="text-center mt-5">
                        Leading companies use the same courses to help employees <br />
                        keep their skills fresh.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-5 mt-12'>
                <div className='flex items-center justify-center'><img src={partner1} alt="" /></div>
                <div className='flex items-center justify-center'><img src={partner2} alt="" /></div>
                <div className='flex items-center justify-center'><img src={partner3} alt="" /></div>
                <div className='flex items-center justify-center'><img src={partner4} alt="" /></div>
                <div className='flex items-center justify-center'><img src={partner5} alt="" /></div>
                <div className='flex items-center justify-center'><img src={partner6} alt="" /></div>
            </div>
        </div>
    );
};

export default Partners;