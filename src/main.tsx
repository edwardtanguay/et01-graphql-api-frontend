import ReactDOM from 'react-dom/client';
import App from './App';
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	HttpLink,
} from '@apollo/client';

const client = new ApolloClient({
	link: new HttpLink({
		// uri: 'http://localhost:5547/graphql',
		uri: 'https://flyby-gateway.herokuapp.com/',
		fetchOptions: {
			mode: 'no-cors',
		},
	}),
	cache: new InMemoryCache(),
	credentials: 'include',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
