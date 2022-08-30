import './App.scss';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import axios from 'axios';

const QUERY = gql`
	query skjdfksdjfskdfj {
		hello
	}
`;
// const GET_LOCATIONS = gql`
// 	query GetLocations {
// 		locations {
// 			id
// 			name
// 			description
// 			photo
// 		}
// 	}
// `;

function App() {
	const { loading, error, data } = useQuery(QUERY);
	if (!loading) {
		console.log('111');
		console.log(data, error);
		console.log('222');
	}

	useEffect(() => {
		(async () => {
			const _data = ((await axios.get('http://localhost:5547/graphql')).data);
			console.log(_data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>GraphQL Test - Frontend</h1>
			{/* <div>{data.hello}</div> */}

			<ul>
				{/* {data.locations.map((location: any) => (
					<li key={location.id}>{location.name}</li>
				))} */}
			</ul>
		</div>
	);
}

export default App;
