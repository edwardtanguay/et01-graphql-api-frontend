import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	// uri: 'http://localhost:5547/graphql/',
	uri: 'https://flyby-gateway.herokuapp.com/',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
