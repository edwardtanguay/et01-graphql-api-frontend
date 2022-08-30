import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://api.spacex.land/graphql'
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
