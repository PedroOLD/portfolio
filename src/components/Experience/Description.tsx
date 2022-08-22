import React from 'react'
import { useGetExperienceByIdQuery } from '../../graphql/generated'

interface Props {
    idDescription: any
}

export function Description( { idDescription }: Props) {

    const { data } = useGetExperienceByIdQuery({
        variables: {
            id: idDescription
        }
    })

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-2xl pb-6'> {data?.experience?.occupation} </h2>
                <p className='text-base'> {data?.experience?.data} </p>
            </div>

            <a href={`${data?.experience?.linkcompany}`} className='block text-blue-900 text-base pb-6'> {data?.experience?.company} </a>
            
            <p className='text-lg text-gray-300 font-[300]'>
                {data?.experience?.descriptionWork}
            </p>
            
        </div>
    )
}
