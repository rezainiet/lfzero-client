import React, { useState } from 'react';

const Instructor = () => {
    const [overviewValue, setOverviewValue] = useState('')
    const [overview, setOverview] = useState([])
    const [videoUrlValue, setVideoUrlValue] = useState('')
    const [videoUrl, setVideoUrl] = useState([])
    return (
        <div className='bg-gray-200'>
            <div className='max-w-7xl mx-auto'>
                <h1 className="font-libreBasker font-medium text-6xl">Add A Course</h1>
                <from>
                    <input name='name' className='text-md px-5 py-3 outline-[#5D10E3] text-gray border-gray border-2 min-w-[400px] placeholder:text-black' placeholder='Course Name' type='text'></input>
                    <br />
                    <textarea name='name' className='text-md px-5 py-3 outline-[#5D10E3] text-gray border-gray border-2 min-w-[400px] placeholder:text-black' placeholder='Course Name' type='password'></textarea>
                    <br />
                    <input onBlur={(e) => setOverviewValue(e.target.value)} name='name' className='text-md px-5 py-3 outline-[#5D10E3] text-gray border-gray border-2 min-w-[345px] placeholder:text-black' placeholder='Course Overview' type='text'></input>
                    <button onClick={() => setOverview([...overview, overviewValue])} className='bg-[#5D10E3] text-white px-3 py-3'>Add</button>
                    <ul>
                        {overview.map((o,i) => <ol type=''>{i+1}) {o}</ol>)}
                    </ul>
                    <input onBlur={(e) => setVideoUrlValue(e.target.value)} name='name' className='text-md px-5 py-3 outline-[#5D10E3] text-gray border-gray border-2 min-w-[345px] placeholder:text-black' placeholder='Video URL' type='url'></input>
                    <button onClick={() => setVideoUrl([...videoUrl, videoUrlValue])} className='bg-[#5D10E3] text-white px-3 py-3'>Add</button>
                    <ul>
                        {videoUrl.map((v,i) => <ol type=''>{i+1}) {v}</ol>)}
                    </ul>
                    <input name='name' className='text-md px-5 py-3 outline-[#5D10E3] text-gray border-gray border-2 min-w-[400px] placeholder:text-black' type='url' placeholder='Thumbnail'></input>
                    <br />
                    <input className='text-md px-5 py-3 bg-[#5D10E3] text-white' type='submit' value='Upload Course'></input>
                </from>
            </div>
        </div>
    );
};

export default Instructor;