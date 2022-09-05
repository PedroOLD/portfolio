import React from 'react';
import { useGetExperienciesQuery } from '../../graphql/generated';

import './style/index.css';

interface Props {
    setExperience: any
}
export function ListExperience({ setExperience }: Props) {
    const { data } = useGetExperienciesQuery();

    const nodeListButtonExperience = document.querySelectorAll('.listExperience li');

    function removeClassActiveButton() {    
        nodeListButtonExperience.forEach((li) => {
            li.classList.remove('active');
        })
        
    }


    const OpenDescriptionExperience = (event: any ) => {
        removeClassActiveButton();
        const IdSectionVariable = event.target.id;
        event.target.classList.add('active');
        setExperience(IdSectionVariable);

    }

  return (
    <ul 
        className='listExperience flex flex-col gap-6 text-lg text-gray-300 cursor-pointer w-[50%] border-l border-neutral-900 '
    >
        {data?.experiences.map((experience) => {
            return (
                <li
                    key={experience.id}
                    id={experience.id}
                    className={`text-white border-l-2 border-gray-700 px-8 py-2`}
                    onClick={OpenDescriptionExperience}
                >
                    {experience.company}
                </li>
            )
        })}
    </ul>
  )
}