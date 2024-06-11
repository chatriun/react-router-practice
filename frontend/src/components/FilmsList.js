import { Link } from "react-router-dom";

const FilmsList = ({ films }) => {
  return (
    <>
      <button>
        <Link
          to="new"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          new film
        </Link>
      </button>
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
            <Link
              to={film.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1>{film.title}</h1>
              <img src={film.url} style={{ height: "auto", width: 400 }} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmsList;
