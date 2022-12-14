import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';

const Services = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div id="blogs" className='container'>
            <div className='row'>
                <h1 className='blogs-title mt-3 text-2xl text-center'>Blogs</h1>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </div>
            </div>
            {/* <Link to="/addblog">
                <button>Write Artcle</button></Link> */}
        </div>
    );
};

export default Services;