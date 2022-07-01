
import { Link } from 'phosphor-react';
import imgProject from '../../assets/img-project.png';
import { Anchor } from '../AnchorButton/Anchor';

export function CardProject() {
    return (
        
        <div className="flex flex-col justify-start items-start">
            <div className="mb-16 w-full h-full max-w-[35rem] max-h-[100%] overflow-hidden">
                <img 
                    className="border-l-4 border-blue-900 m-auto "
                    src={imgProject} 
                    alt="" 
                />
            </div>
            

            <div>
                <strong className="text-white text-2xl font-medium mt-2">Nome do Projeto</strong>

                <p className="text-gray-300 text-base my-2">descrição</p>

                <a href="" className="text-blue-900 text-sm">Todas as tecnologias usadas</a>
             
            </div>
        
            <div className="my-8">
                <Anchor icon={<Link size={24} />} text="Visualizar" borderType='purple' />
            </div>
        </div>
    )
}