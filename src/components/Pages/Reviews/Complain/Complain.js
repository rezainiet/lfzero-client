import React from 'react';

const Complain = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 my-12 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-900 shadow-2xl">
            <div className="flex flex-col justify-center">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-4xl">Tell'us!</h2>
                    <div className="text-gray-900 text-xl"> Your complaint</div>
                </div>
                <img src="https://www.nurihs.sa.edu.au/images/Feedback_Complaints_Logo.png" alt="" className="p-6 h-52 md:h-64 mt-32" />
            </div>
            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className=" font-bold">Name</label>
                    <input id="name" type="text" placeholder="Enter Full Name" className="w-full p-3 rounded border-pink-500 border-2 focus:bg-gray-200" />
                </div>
                <div>
                    <label for="name" className=" font-bold">Email</label>
                    <input id="name" type="text" placeholder="i.e:example@gmail.com" className="w-full p-3 rounded border-pink-500 border-2 focus:bg-gray-200" />
                </div>
                <div>
                    <label for="name" className=" font-bold">Phone</label>
                    <input id="name" type="text" placeholder="i.e:01xxxxxxxxx" className="w-full p-3 rounded border-pink-500 border-2 focus:bg-gray-200" />
                </div>
                <div>
                    <label for="name" className=" font-bold">Subject</label>
                    <input id="name" type="text" placeholder="i.e: I got some issue" className="w-full p-3 rounded border-pink-500 border-2 focus:bg-gray-200" />
                </div>

                {/* <div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded " />
		</div> */}
                <div>
                    <label for="message" className=" font-bold">Complain</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded border-pink-500 border-2"></textarea>
                </div>
                <button type="submit" className="w-2/6 p-4 py-4 text-sm font-bold tracking-wide uppercase rounded bg-pink-500 text-white">Submit</button>
            </form>
        </div>
    );
};

export default Complain;