
import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";
import { useEffect } from "react";
import { useThemeContext } from '../../utils/theme-context';
import { thememap } from '../../utils/theme-map';

const client = new ApolloClient({
    uri: 'https://dev.peddlesoft.com/graphql',
    cache: new InMemoryCache()
});



export default function Home({ data }) {
    const { name, theme: mytheme } = data?.eventById;
    const { theme, setTheme } = useThemeContext();
    
    useEffect(() => {
        setTheme(thememap[`${mytheme}`])
       }, [])
    

    return (
        <div className={`container mx-auto mt-4 flex flex-col items-center justify-around h-screen bg-${theme}-500 `}>
            <div className="card flex flex-col bg-black">
                <h1 className="text-blue-500">
                    {name}
                </h1>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {

    const { id } = params
    const query = gql`
   query($id: Int!) {
     eventById(id: $id) {
       id,
       name,
       theme
     }
   }
 `
    const {
        loading,
        error = null,
        data
    } = await client.query({ query: query, variables: { id: id } })

    return {
        props: {
            data
        }
    }
}


export async function getStaticPaths() {

    const { data, loading, error } = await client.query({
        query: gql`
           query {
            events {
             id,
             name
          } }
          `
    })
    return {
        paths: data.events.map(({ id }) => ({ params: { id } })),
        fallback: false,
    };

}




