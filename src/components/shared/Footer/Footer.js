import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-indigo-600 to-[#5D10E3]'>
            <div className='pt-[51px] pb-[66px] px-5 2xl:px-0 max-w-7xl mx-auto'>
                <div className='sm:grid grid-cols-3 lg:grid-cols-5'>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px]'>Product</h4>
                        <a className='text-white text-[14px] my-1' href=''>Landing Page</a>
                        <a className='text-white text-[14px] my-1' href=''>Popup Builder</a>
                        <a className='text-white text-[14px] my-1' href=''>Web-design</a>
                        <a className='text-white text-[14px] my-1' href=''>Content</a>
                        <a className='text-white text-[14px] my-1' href=''>Integrations</a>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-0'>Use Cases</h4>
                        <a className='text-white text-[14px] my-1' href=''>Web-designers</a>
                        <a className='text-white text-[14px] my-1' href=''>Marketers</a>
                        <a className='text-white text-[14px] my-1' href=''>Small Business</a>
                        <a className='text-white text-[14px] my-1' href=''>Website Builder</a>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-0'>Resources</h4>
                        <a className='text-white text-[14px] my-1' href=''>Academy</a>
                        <a className='text-white text-[14px] my-1' href=''>Blog</a>
                        <a className='text-white text-[14px] my-1' href=''>Themes</a>
                        <a className='text-white text-[14px] my-1' href=''>Hosting</a>
                        <a className='text-white font-[14px] my-1' href=''>Developers</a>
                        <a className='text-white text-[14px] my-1' href=''>Support</a>
                    </div>
                    <div className='col-span-full lg:col-start-4 lg:col-end-6 flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-[28px] lg:mt-0'>Subscribe</h4>
                        <p className='text-white text-base mb-4'>Subscribe to stay tuned for new web-design and latest updates. Lets do it!</p>
                        <form className='flex flex-col sm:flex-row gap-2.5'>
                            <input className='placeholder-black font-normal text-base py-2.5 sm:py-[18px] px-[10px] rounded-lg max-w-[350px] sm:min-w-[290px] lg:w-[290px] outline-white' type='text' placeholder='Enter your email Address'></input>
                            <input className='text-white bg-[#F53289] font-normal rounded-lg w-[132px] px-[18px] py-2.5 sm:py-[18px] cursor-pointer' type='submit' value='Subscribe'></input>
                        </form>
                    </div>
                </div>
                <h1 className='text-white text-[16px] mt-5 lg:mt-[60px]'>&#169; 2022 All Rights Resierved</h1>
            </div>
        </footer>
    );
};

export default Footer;