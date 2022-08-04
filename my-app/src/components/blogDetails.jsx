import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch('http://127.0.0.1:8000/blogs/' + id);
	const navigate = useHistory();

	const handleClick = () => {
		fetch('http://127.0.0.1:8000/blogs/' + blog.id, {
			method: 'DELETE',
		}).then(() => {
			navigate.push('/');
		});
	};

	return (
		<div className='blog-details'>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			<article>
				<h2>{blog.title}</h2>
				<p>Written by {blog.author}</p>
				<div>{blog.body}</div>
				<button onClick={handleClick}>Delete</button>
			</article>
		</div>
	);
};

export default BlogDetails;
