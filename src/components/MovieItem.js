import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => (
    <li key={movie.id}>
        <Link to={`movie/${movie.id}`}>{movie.title}</Link>
    </li>
);