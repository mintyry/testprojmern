import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {header})=>{
  const token = localStorage.getItem('token');

  return {
    ...headers,
    authorization: `Bearer ${token? token : ''}`
  }
});

const client = new ApolloClient({
  link: httpLink.concat(authLink),
  cache: new InMemoryCache()
});

function App() {


  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
}

export default App
