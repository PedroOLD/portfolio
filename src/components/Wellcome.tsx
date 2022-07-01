import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { GetInfoAboutMeBySlugQuery } from '../graphql/generated';
import { Anchor } from "./AnchorButton/Anchor";
import { Imgbackground } from "./Imgbackground";

interface Props {
    data: GetInfoAboutMeBySlugQuery
}


export function Wellcome({data}: Props)  {
    
    return (
        <div className="flex items-center justify-between min-h-[65vh] min-w-[50%]  m-auto bg-neutral-800 leading-relaxed">
            <div className="flex flex-col gap-5 px-16">
                <p className="text-white text-2xl">
                    olá, eu sou <br />
                    <strong className="block text-blue-900 text-6xl my-3"> {data.aboutme?.name} </strong>
                    {data.aboutme?.occupation}
                </p>

                <div className="flex gap-5">
                    <Anchor icon={<LinkedinLogo size={24} />} text="Linkedin" borderType="purple" link={data.aboutme?.linkLinkedin} /> 
                    <Anchor icon={<GithubLogo size={24} />} text="GitHub" borderType="pink" link={data.aboutme?.linkGithub} />
                </div>
            </div>
            
            <div className="flex items-center  overflow-hidden">
                <Imgbackground/>
            </div>            

        </div>
    )
    
}