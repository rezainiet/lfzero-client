import React from 'react';
import signUpBg from '../../../assets/images/loginImage.png'

const SignUp = () => {
    const signUpFormSubmit = (e) => {
        e.preventDefault()
        const check = e.target.check
        if(!check.checked){
            return 
        }
    }
    return (
        <section className='bg-[#643CF4]'>
            <div className="max-w-7xl mx-auto flex justify-between py-12 px-1 lg:px-2 xl:px-0">
                <div className='flex-1'>
                    <form onSubmit={signUpFormSubmit} className='bg-white flex flex-col mr-0 lg:mr-16 p-5 sm:p-8 lg:p-14 rounded-3xl max-w-[600px] lg:max-w-full'>
                        <h2 className='text-2xl font-semibold text-[#5D10E3] mb-5'>Sign Up</h2>
                        <input name='name' className='text-md my-2 px-5 py-3 rounded-full outline-[#5D10E3] text-gray border-gray border-2' placeholder='Name' type='text'></input>
                        <input name='email' className='text-md my-2 px-5 py-3 rounded-full outline-[#5D10E3] text-gray border-gray border-2' placeholder='example@gmail.com' type='text'></input>
                        <input name='password' className='text-md my-2 px-5 py-3 rounded-full outline-[#5D10E3] text-gray border-gray border-2' placeholder='**********' type='password'></input>
                        <div className='mt-2 mb-4'>
                            <input id='check' name='check' className='mr-3' type='checkbox'></input>
                            <label htmlFor='check'>I agree to </label>
                            <a href='#' className='text-[#F53289] font-medium'>the terms and conditions</a>
                        </div>
                        <input className='text-md my-2 px-5 py-3 rounded-full outline-[#F53289] bg-gradient-to-r from-[#f7d7e5] to-[#F53289] hover:from-[#F53289] hover:to-[#f7d7e5] text-white cursor-pointer' value='Sign Up' type='submit'></input>
                    </form>
                </div>
                <img className='hidden lg:block lg:w-[500px] xl:w-[600px] 2xl:flex-1' src={signUpBg} alt=''></img>
            </div>
        </section>
    );
};

export default SignUp;