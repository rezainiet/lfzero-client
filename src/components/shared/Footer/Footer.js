import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#5D10E3]'>
            <div className='pt-[51px] pb-[66px] max-w-7xl mx-auto'>
                <div className='grid grid-cols-5'>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-[27px]'>Product</h4>
                        <a className='text-white text-[14px] my-1' href=''>Landing Page</a>
                        <a className='text-white text-[14px] my-1' href=''>Popup Builder</a>
                        <a className='text-white text-[14px] my-1' href=''>Web-design</a>
                        <a className='text-white text-[14px] my-1' href=''>Content</a>
                        <a className='text-white text-[14px] my-1' href=''>Integrations</a>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-[27px]'>Use Cases</h4>
                        <a className='text-white text-[14px] my-1' href=''>Web-designers</a>
                        <a className='text-white text-[14px] my-1' href=''>Marketers</a>
                        <a className='text-white text-[14px] my-1' href=''>Small Business</a>
                        <a className='text-white text-[14px] my-1' href=''>Website Builder</a>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-[27px]'>Resources</h4>
                        <a className='text-white text-[14px] my-1' href=''>Academy</a>
                        <a className='text-white text-[14px] my-1' href=''>Blog</a>
                        <a className='text-white text-[14px] my-1' href=''>Themes</a>
                        <a className='text-white text-[14px] my-1' href=''>Hosting</a>
                        <a className='text-white font-[14px] my-1' href=''>Developers</a>
                        <a className='text-white text-[14px] my-1' href=''>Support</a>
                    </div>
                    <div className='col-start-4 col-end-6 flex flex-col'>
                        <h4 className='text-[#F53289] font-bold text-[22px] mb-[27px]'>Subscribe</h4>
                        <p className='text-white text-base mb-4'>Subscribe to stay tuned for new web-design and latest updates. Lets do it!</p>
                        <form className='flex gap-2.5'>
                            <input className='placeholder-black font-normal text-base py-[18px] px-[10px] rounded-lg w-[290px] outline-white' type='text' placeholder='Enter your email Address'></input>
                            <input className='text-white bg-[#F53289] font-normal rounded-lg w-[132px] px-[18px] py-[18px] cursor-pointer' type='submit' value='Subscribe'></input>
                        </form>
                    </div>
                </div>
                <p className='text-white text-[12px] mt-[60px]'>&#169; 2022 All Rights Resierved</p>
            </div>
        </footer>
    );
};

export default Footer;