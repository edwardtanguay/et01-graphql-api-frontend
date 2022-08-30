import './App.scss';
import { useQuery } from 'urql';

const query = `
	query {
		hello
	}
`;

function App() {
	const [result] = useQuery({ query });
	const { data, fetching} = result;

	if (!fetching) {
		console.log(data);
	}
	
	return (
		<div className="App">
			<h1>GraphQL Test - Frontend</h1>
			{fetching && (
				<div>loading...</div>
			)}
			{!fetching && (
				<div>{data.hello}</div>
			)}
		</div>
	);
}

export default App;
