import './App.scss';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
	{
		hello
		message
		books,
		employees {
			lastName
		},
		slowEmployees {
			firstName
		}
	}
`;

function App() {
	const { loading, data } = useQuery(QUERY);

	return (
		<div className="App">
			<h1>GraphQL Test - Frontend</h1>
			{loading && (
				<div>loading...</div>
			)}
			{!loading && (
				<>
					<div>{data.hello}</div>
					<div>{data.message}</div>
					<div>{data.books.map((book: any) => book).join(', ')}</div>
					<div>{data.employees.map((emp: any) => emp.lastName).join(', ')}</div>
					<div>{data.slowEmployees.map((emp: any) => emp.firstName).join(', ')}</div>
				</>
			)}
		</div>
	);
}

export default App;
