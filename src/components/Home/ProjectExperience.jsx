import React from 'react'
import { FiCode } from 'react-icons/fi'
const ProjectExperience = () => {
    const projectExperienceData = [{
        duration: `August 1 2023 - ${new Date().toDateString()}`,
        projectName: 'Self-Sign On, Webshop , Show-case, Reservation',
        clientName: 'Klikit',
        responsiblities: [`Maintain and create reusable components with React JS, 
Formik, Redux toolkit for business owners to sign-up and 
create a Web shop for their chain of restaurants.`, `Using browsers native functionality to maintain a Web 
shop for consumers to place order and gain seamless 
insight of order details and Reservation`, `Design and maintain website for business owner to “Show 
case” their restaurant and food.`, `Maintain and update user experience for consumers`, `Localization support for consumer-end web application 
i.e Webshop and Reservation`, `Debugging and bug fixes for features developed`, `Make a responsive design for different devices using Sass
and Tailwind CSS`]
    },
    {
        duration: 'November 2022 - July 2023',
        projectName: 'Software for disabled people-SD17',
        clientName: 'Bangladesh Computer Council',
        responsiblities: [` Visual component analysis to use in web application 
specifically for disabled people`, `Create reusable components for web application using 
React JS`, `Make a responsive design for different devices using 
Tailwind CSS`]

    },{
        duration:'April 2022 - October 2022',
        projectName:' Data Analytics using BI (Business Intelligence) tool Qlik Sense',
        clientName: 'Mandara Stocks, Early data, ASEAN data',
        responsiblities: [`Create and design data models for data visualization`, `Maintain extract transform and load process for 
incremental data`, `Dashboard preparation, Analysis, and Reporting for data-driven companies`,`Determine data visualization components from UI/UX 
perspective`]
    }]
    return (
        <section id='portfolio' className='flex h-full xl:h-[100vh]'>
            <div className="w-full md:container md:mx-auto ">
                <div className=" inline-flex flex-col w-full h-[800px] gap-y-12 py-20">
                    <h2 className='font-space text-white text-center'>Project Experience</h2>
                    <div className='scroll-content'>
                        <ol class="timeline text-white ml-4 ">
                            {projectExperienceData.map((exp,index)=>{
                                return(
                                    <li key={index} class="mb-10 ml-4 relative ">
                                        <span class="absolute  inline-flex justify-center items-center w-8 h-8 bg-gradient-to-br from-zinc-900 via-zinc-700 to-teal-900 rounded-full mt-2 -translate-x-1/2 -left-5 border border-teal-700 dark:border-gray-900 dark:bg-gray-700 ">
                                            <FiCode color='#d1d5db' className='z-10 text-xl 
                            rotate-6' width={8} height={8} />
                                        </span>
                                        <div className='p-6 ml-2 backdrops hover:scale-[100%] scale-[98%] transition-all right-arrow top-3 text-gray-400 mt-0 rounded-s-none rounded-lg'>
                                            <time class="mb-1 text-lg font-bold leading-none text-gray-400 dark:text-gray-500">{exp.duration}</time>
                                            <h3 class="text-xl font-semibold "> <span className='text-teal-600'>Project Name: </span>{exp.projectName}</h3>
                                            <h4 className="text-lg font-semibold "><span className='text-teal-600'>Client Name: </span>{exp.clientName}</h4>
                                            <ul class="text-base font-normal text-white">
                                                {exp.responsiblities.map((res,index)=>{ return (
                                                    <li className=" ml-8 list-disc text-left" key={index}>
                                                        {res}
                                                    </li>
                                                )})}
                                            </ul>
                                        </div>

                                    </li>
                                )
                            })}
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProjectExperience