import React from 'react'
import { useGetExperienceByIdQuery } from '../../graphql/generated'

interface Props {
    idDescription: any
}

export function Description( { idDescription }: Props) {
    console.log(idDescription);

    const { data } = useGetExperienceByIdQuery({
        variables: {
            id: idDescription
        }
    })

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-2xl pb-6'> {data?.experience?.company} </h2>
                <p className='text-base'>data trampo</p>
            </div>

            <a href="" className='block text-blue-900 text-base pb-6'>Dimio</a>
            
            <p className='text-lg text-gray-300 font-[300]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, consequuntur corporis a molestias vitae voluptatibus maxime dicta. Molestias laborum assumenda error veniam, harum, sed, nam ex consectetur sapiente quasi adipisci!
            </p>
            
        </div>
    )
}
