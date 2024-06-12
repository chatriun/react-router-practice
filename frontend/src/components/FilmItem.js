import { Link, useSubmit } from "react-router-dom";

const FilmItem = ({ film }) => {
  const submit = useSubmit();
  const handleDelete = () => {
    const confirm = window.confirm("are you sure?");

    if (confirm) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <>
      <h1 style={{ textDecoration: "#8A2BE2 wavy underline" }}>{film.title}</h1>
      <h5>{film.date}</h5>
      <img src={film.url} style={{ height: "auto", width: 400 }} />
      <p style={{ width: 600, marginBottom: "60px" }}>
        <span style={{ textOverflow: "ellipsis" }}>{film.description}</span>
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
        }}
      >
        <span>
          <Link to=".." relative="path">
            {`( ↩︎ back )`}
          </Link>
        </span>
        <span>
          <Link to="edit">{`( ✎ edit )`}</Link>
        </span>
        <span>
          <button type="button" onClick={handleDelete}>{`( delete ✖︎)`}</button>
        </span>
      </div>
    </>
  );
};

export default FilmItem;
