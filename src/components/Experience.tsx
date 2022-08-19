import React, { FC } from 'react'

export function Experience() {

    const OpenDescriptionExperience = () => {
        console.log('abriu')
    }

    return (
        <div className='flex flex-col text-white p-16 gap-8 bg-neutral-800'>
            <h1 className='font-bold text-2xl uppercase'>Experiência</h1>

            <div className='grid grid-cols-[1fr_2fr]'>
                <div className='w-full'>
                    <ul 
                        className='flex flex-col gap-6 text-lg text-gray-300 cursor-pointer w-[50%] border-l border-neutral-900 '
                    >
                        <li 
                            className='text-white border-l-2 border-blue-900 px-8 py-2 bg-neutral-900'
                            onClick={OpenDescriptionExperience}
                        >
                            Dimio
                        </li>
                        
                        <li 
                            className='px-8 py-2'
                            onClick={OpenDescriptionExperience}
                        >
                            Web Motors
                        </li>
                        
                        <li 
                            className='px-8 py-2'
                            onClick={OpenDescriptionExperience}
                        >
                            Hibrido
                        </li>
                        
                        <li 
                            className='px-8 py-2'
                            onClick={OpenDescriptionExperience}
                        >
                            Meta
                        </li>
                        <li 
                            className='px-8 py-2'
                            onClick={OpenDescriptionExperience}
                        >
                            CoreBiz
                        </li>
                    </ul>
                </div>            

                <div>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl pb-6'>title</h2>
                        <p className='text-base'>data trampo</p>
                    </div>

                    <a href="" className='block text-blue-900 text-base pb-6'>Dimio</a>
                    
                    <p className='text-lg text-gray-300 font-[300]'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, consequuntur corporis a molestias vitae voluptatibus maxime dicta. Molestias laborum assumenda error veniam, harum, sed, nam ex consectetur sapiente quasi adipisci!
                    </p>
                    
                </div>
            </div>

            
        </div>
    )
}
