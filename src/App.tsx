import './App.scss';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
	{
		launchesPast(limit: 10) {
			id
			mission_name
		}
	}
`;

function App() {
	const { data, loading, error } = useQuery(QUERY);

	return (
		<div className="App">
			<h1>GraphQL Test - Frontend</h1>
			<ul>
				{data.launchesPast.map((launch:any, i: number) => (
					<li key={i}>{launch.mission_name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
