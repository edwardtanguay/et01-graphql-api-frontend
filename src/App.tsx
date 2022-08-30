import './App.scss';
import { useQuery, gql } from '@apollo/client';

// const QUERY = gql`
// 	{
// 		hello
// 	}
// `;
const GET_LOCATIONS = gql`
	query GetLocations {
		locations {
			id
			name
			description
			photo
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_LOCATIONS);
	console.log(data);

	return (
		<div className="App">
			<h1>GraphQL Test - Frontend</h1>

			<ul>
				{data.locations.map((location: any) => (
					<li key={location.id}>{location.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
