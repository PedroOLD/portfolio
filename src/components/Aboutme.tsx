import { CloudArrowDown, Envelope } from "phosphor-react";
import { Anchor } from "./AnchorButton/Anchor";
import {  GetInfoAboutMeBySlugQuery } from '../graphql/generated';

interface Props { 
    data:  GetInfoAboutMeBySlugQuery
}

export function Aboutme({data}: Props) {

    return (
        <div className="grid grid-cols-2 p-16">
            <div>
                <img
                    className="max-w-[367px] max-h-[367px] border-l-4 border-blue-900" 
                    src={data.aboutme?.linkPictureGitHub} 
                    alt="" 
                />
            </div>
            <div className="">
                <h1 className="text-white font-bold text-2xl mb-3">Sobre mim</h1>
                <p className="text-white font-bold text-xs mb-3">{data.aboutme?.country}</p>
                <p className="text-gray-300 text-lg">
                    <strong className="block mb-2"> {data.aboutme?.occupation} </strong>
                    {data.aboutme?.description}
                </p>

                <div className="flex gap-5 mt-5">
                    <Anchor icon={<CloudArrowDown size={24} /> } text="Curriculo" borderType="pink" />
                    <Anchor icon={<Envelope size={24} />} text="E-mail" borderType="purple" link="mailto:pedro.santosvale1999@gmail.com" />
                </div>
            </div>
        </div>
    )
}