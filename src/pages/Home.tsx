import { useParams } from "react-router-dom";
import { Aboutme } from "../components/Aboutme";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Project } from "../components/Project";
import { Wellcome } from "../components/Wellcome";
import { useGetInfoAboutMeBySlugQuery } from "../graphql/generated";

export function Home () {
    const slug = "pedro-henrique"
    
    if (slug) {
        const { data } = useGetInfoAboutMeBySlugQuery({ 
            variables: {
                slug: slug
            }
        })
        
        if ( data ) {
            return (
                <>
                    <Header />
                    <Wellcome data={data} />  
                    <Aboutme data={data}/> 
                    <Experience />
                    <Project /> 
                    
                </>
            )
        } else {
            return (
                <h1>Erro - Data not found</h1>
            )
        }
        
    } else {
        return (
            <h1>Erro - Slug</h1>
        )
    }
    
}