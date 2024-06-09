import { Link } from "react-router-dom";

const FilmItem = ({ film }) => {
  return (
    <>
      <h1 style={{ textDecoration: "#8A2BE2 wavy underline" }}>{film.title}</h1>
      <h5>{film.date}</h5>
      <img src={film.image} style={{ height: "auto", width: 400 }} />
      <p style={{ width: 600, marginBottom: "60px" }}>
        <span style={{ textOverflow: "ellipsis" }}>{film.description}</span>
      </p>
      <p>
        {`✦ back to `}
        <Link to=".." relative="path">
          films
        </Link>
        ✦
      </p>
    </>
  );
};

export default FilmItem;
