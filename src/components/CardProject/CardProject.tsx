
import { Link } from 'phosphor-react';
import React from 'react';
import { Anchor } from '../AnchorButton/Anchor';
import ContextModal from '../ModalTachnologies/context/ContextModal';
import { OpenModal } from '../ModalTachnologies/OpenModal';

// @types
import { SetPropsCardProject, OpenModalStateCardProject} from './@types/CardProjectProps';

export function CardProject({nameProject, description, urlImage, technologies}: SetPropsCardProject) {

    const [modal, setModal] = React.useState<OpenModalStateCardProject | boolean>();
    
    return (

        <ContextModal.Provider value={'test'}>
        
            <div className="flex flex-col justify-start items-start">
                <div className="mb-16 w-full h-full max-w-[35rem] max-h-[100%] overflow-hidden">
                    <img 
                        className="border-l-4 border-blue-900 m-auto "
                        src={urlImage} 
                    />
                </div>
                
                <div>
                    <strong className="text-white text-2xl font-medium mt-2">{nameProject}</strong>

                    <p className="text-gray-300 text-base my-2">{description}</p>
                    
                    <p 
                        onClick={() => {setModal(false)}} 
                        className="text-blue-900 text-sm"
                    >
                        Todas as tecnologias usadas
                    </p>

                     <OpenModal />
                
                </div>
            
                <div className="my-8">
                    <Anchor icon={<Link size={24} />} text="Visualizar" borderType='purple' />
                </div>
            </div>
        </ContextModal.Provider>
    )
}