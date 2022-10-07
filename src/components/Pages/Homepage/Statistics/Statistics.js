import React from 'react';
import icon1 from './../../../../assets/images/icons/pencil-icon.svg';
import icon2 from './../../../../assets/images/icons/gratuate-icon.svg';
import icon3 from './../../../../assets/images/icons/cources-icon.svg';

const Statistics = () => {

    return (
        <div className='mx-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-white gap-6'>
                <div className='flex items-center justify-center '>
                    <div className='flex gap-5 items-center bg-[#F66962] py-8 px-12 rounded-2xl w-96 lg:max-w-lg'>
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>200+</h4>
                            <p>New Courses</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <div className='flex gap-5 items-center bg-[#78F2FF] py-8 px-12 rounded-2xl w-96 lg:max-w-lg'>
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>5000+</h4>
                            <p>New Students</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <div className='flex gap-5 items-center bg-[#5C71EF] py-8 px-12 rounded-2xl w-96 lg:max-w-lg'>
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>100+</h4>
                            <p>New Teachers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;