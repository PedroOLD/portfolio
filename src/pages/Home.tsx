import { useParams } from "react-router-dom";
import { Aboutme } from "../components/Aboutme";
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
    
        return (
            <>
                <Header />
                { data && <Wellcome data={data} />  }
                { data && <Aboutme data={data}/> }
                { data && <Project /> }

            </>
        )
    } else {
        return (
            <h1>Erro</h1>
        )
    }
    
}