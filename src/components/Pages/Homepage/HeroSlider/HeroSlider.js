import React from 'react';
import heroImage1 from './../../../../assets/images/object.png'
import playLogo from './../../../../assets/icons/play.svg'
import './HeroSLider.css'

const HeroSlider = () => {
    return (
        <div>
            <div className='bg-[#5D10E3] myClipPath pb-20 pt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center text-white mx-12'>
                    <div className='mx-5 my-8 grid items-center mx-auto justify-items-center'>
                        <div>
                            <div className='grid items-center'>
                                <h1 className='text-4xl font-bold'><span className='text-[#F53289]'>Studying</span> Online is now <br />much easier</h1>
                                <p className='my-5'>LFZero is an interesting platform that will teach <br /> you an elegant way</p>
                            </div>
                            <div className='flex gap-16 items-center mt-5'>
                                <div><button className='bg-pink-500 px-12 py-2 rounded-full font-semibold'>Join Free</button></div>
                                <div className='flex items-center gap-4'>
                                    <img src={playLogo} alt="Play logo" />
                                    <p>Watch how it works</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid items-center mx-auto justify-items-center'>
                        <img src={heroImage1} alt="hero pic" className='w-3/4' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;