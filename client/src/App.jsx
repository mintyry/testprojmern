import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {


  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
}

export default App
