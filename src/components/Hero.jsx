import React from 'react';

const Hero = () => {
    return (
        <div className='m-w-[1640px] max-auto px-4 py-4 '>
            <div className="max-h-[500px] relative">
                <div
                    className=" absolute max-h-[600px]  bg-black/10 h-full w-full flex flex-col justify-center">
                    <h1 className="ml-44 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500 justify-center">The<span
                        className="text-blue-900 tepl-5">Brands</span></h1>
                    <h1 className="ml-80 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500">you<span
                        className="text-blue-900">Wish</span></h1>
                </div>
                <img className="w-full max-h-[500px] object-cover"
                     src="https://images.pexels.com/photos/936023/pexels-photo-936023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                     alt="clothes"></img>


            </div>
        </div>
    );
};

export default Hero;
