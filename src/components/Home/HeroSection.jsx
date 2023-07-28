import React from 'react'
import Images from '../../assets/images'

const HeroSection = () => {
    

    
//bg-fixed bg-gradient-to-tr from-zinc-900 via-zinc-900 to-teal-900
    return (
        <section id='meet-shayok' className=' h-[calc(100vh-5vh)] flex items-center '>
            <div className="relative flex container mx-auto flex-col-reverse lg:flex-row max-lg:h-full">
                <div className="max-lg:left-0 max-lg:items-end max-lg:absolute max-lg:h-full hero-content outer-box w-full lg:w-6/12 text-center flex justify-center border-t-r py-10">
                    <div className="inner-box h-full w-full flex flex-col justify-end lg:justify-center">
                        <div className="max-lg:backdrops max-sm:py-10 max-lg:py-20">
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='font-space drop-shadow-xl bg-gradient-to-r from-gray-300 to-teal-900 bg-clip-text text-transparent'>
                            {`<h1>Shayok</h1>`}
                        </h1>
                        <h1 style={{ WebkitTextFillColor: 'transparent' }} className='font-space bg-gradient-to-r from-gray-300 to-teal-900 bg-clip-text text-transparent'>
                            Front End Developer
                        </h1>
                        </div>
                        
                    </div>
                </div>
                <div className="lg:w-6/12 flex justify-end max-lg:items-center max-lg:justify-center max-lg:h-full items-start">
                    <img src={Images.shayokImage} width={320} height={400}  className='rounded-xl c-glitch__img' alt="shayok" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection