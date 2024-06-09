import { Link } from "react-router-dom";

const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.map((film) => (
        <li
          key={film.id}
          style={{
            border: "1px solid #8A2BE2",
            marginBottom: "24px",
            padding: 8,
          }}
        >
          {/* just film.id? */}
          {/* bc น้องเป็น child ของ films */}
          <Link
            to={film.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>{film.title}</h1>
            <img src={film.image} style={{ height: "auto", width: 400 }} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
