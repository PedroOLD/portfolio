import React, { FC } from 'react'
import { Description } from './Experience/Description';
import { ListExperience } from './Experience/ListExperience';



export function Experience() {
    
    const [showSectionExperience, setShowSectionExperience] = React.useState<string>('teste');

    return (
        <div className='flex flex-col text-white p-16 gap-8 bg-neutral-800'>
            <h1 className='font-bold text-2xl uppercase'>Experiência</h1>

            <div className='grid grid-cols-[1fr_2fr]'>
                <div className='w-full'>
                    <ListExperience setExperience={setShowSectionExperience} />
                </div>            
                
                <Description idDescription={showSectionExperience} />
                
            </div>

            
        </div>
    )
}
