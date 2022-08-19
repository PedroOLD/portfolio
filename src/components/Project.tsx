import { useGetProjectsQuery } from "../graphql/generated";
import { CardProject } from "./CardProject/CardProject";


export function Project() {

    const { data } = useGetProjectsQuery();
    
    if (data) {

        return (
            <div className="flex flex-col p-16">
                <h1 className="block text-white text-2xl font-bold">Projetos</h1>
                <div className="grid grid-cols-2 justify-items-start gap-8 mt-16">

                    {data.projects.map( project => {
                        return (
                            <CardProject 
                                key={project.id} 
                                nameProject={project.title} 
                                description={project.description} 
                                urlImage={project.picture.url} 
                                technologies={project.technologies}
                            />
                        )
                    })}

                </div>
                
            </div>
        )
    }

    return (
        <h1>Carregando</h1>
    )

    
}