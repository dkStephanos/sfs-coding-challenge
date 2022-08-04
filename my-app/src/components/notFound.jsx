import { Link } from 'react-router-dom';
const NotFound = () => {
	return (
			<h2>404 Error</h2>
			<p>We cannot find that page!</p>
			<Link to='/'>Take me back to Home</Link>
	);
};
export default NotFound;
