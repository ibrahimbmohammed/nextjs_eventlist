
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import { useEffect } from "react";
import Card from '../components/card';
import { useThemeContext } from '../utils/theme-context';
import { thememap } from '../utils/theme-map';

export default function Home({ data = [], loading}) {
  const {events} = data || [];
  const { theme, setTheme } = useThemeContext();
  useEffect(() => {
    setTheme(thememap["default"])
   }, [theme])

  return (
    <div className={`ml-95 flex flex-col items-center justify-around h-screen bg-${theme}-800`}>
      <div className="grid grid-cols-3 ml-4 gap-0 grid-start">
      {events && events.map((event) => (
     <Card key={event.id} event={event} />      
        ))}    
      </div>
    
    </div>
  )
}


export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://dev.peddlesoft.com/graphql',
    cache: new InMemoryCache()
  });

  
  const { data, loading, error } = await client.query({
    query: gql`
   query {
    events {
     id,
     name,
     attendance,
     eventState,
     paid,
     invitationLetter,
     description,
     minutes
  }  
  }
  `
  })
  
  return {
    props: {
      data,
      loading,
    
    }
  }
}

