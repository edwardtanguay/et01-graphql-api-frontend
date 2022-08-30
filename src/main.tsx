import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:5547/graphql'
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider value={client}>
        <App />
    </Provider>
);
