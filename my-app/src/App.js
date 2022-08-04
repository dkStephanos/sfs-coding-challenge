import Navbar from './components/navBar';
import Home from './components/home';
import Create from './components/create';
import BlogDetails from './components/blogDetails';
import NotFound from './components/notFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
