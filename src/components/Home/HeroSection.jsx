import React from 'react'
import Images from '../../assets/images'

const HeroSection = () => {
    

    
//bg-fixed bg-gradient-to-tr from-zinc-900 via-zinc-900 to-teal-900
    return (
        <section id='meet-shayok' className=' h-[calc(100vh-5vh)] flex items-center '>
            <div className="flex container mx-auto flex-col-reverse md:flex-row">
                <div className="hero-content outer-box w-full md:w-6/12 text-center flex justify-center border-t-r py-10">
                    <div className="inner-box h-full w-full flex flex-col justify-center">
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='font-space drop-shadow-xl bg-gradient-to-r from-gray-300 to-teal-900 bg-clip-text text-transparent'>
                            {`<h1> Shayok </h1>`}
                        </h1>
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='font-space bg-gradient-to-r from-gray-300 to-teal-900 bg-clip-text text-transparent'>
                            Front End Developer
                        </h1>
                    </div>
                </div>
                <div className="md:w-6/12 flex justify-end items-start">
                    <img src={Images.shayokImage} width={320} height={400}  className='rounded-xl c-glitch__img' alt="shayok" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection