import React from 'react'
import { useGetExperienciesQuery } from '../../graphql/generated'

interface Props {
    setExperience: any
}
export function ListExperience({ setExperience }: Props) {
    const { data } = useGetExperienciesQuery();
    
    const OpenDescriptionExperience = (event: any ) => {
        const IdSectionVariable = event.target.id;
        setExperience(IdSectionVariable);
        console.log('foi')
    }

  return (
    <ul 
        className='flex flex-col gap-6 text-lg text-gray-300 cursor-pointer w-[50%] border-l border-neutral-900 '
    >
        {data?.experiences.map((experience) => {
            return (
                <li
                    key={experience.id}
                    id={experience.id}
                    className='text-white border-l-2 border-blue-900 px-8 py-2 bg-neutral-900'
                    onClick={OpenDescriptionExperience}
                >
                    {experience.company}
                </li>
            )
        })}
    </ul>
  )
}