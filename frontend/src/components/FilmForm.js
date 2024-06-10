import { Form, Link, json, redirect, useActionData } from "react-router-dom";

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const filmData = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/films";

  if (method === "PATCH") {
    const filmId = params.filmId;
    url = `http://localhost:8080/films/${filmId}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filmData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save a film :(" }, { status: 500 });
  }

  return redirect("/films");
};

const FilmForm = ({ method, film }) => {
  const data = useActionData();

  return (
    // TODO: action
    <Form method={method}>
      <h3>add new film ♡</h3>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>
              <span style={{ color: "red" }}>{error}</span>
            </li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">title: </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={film ? film.title : ""}
        />
      </p>
      <p>
        <label htmlFor="date">date: </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          defaultValue={film ? film.date : ""}
        />
      </p>
      <p>
        <label htmlFor="image">image: </label>
        <input
          id="image"
          name="image"
          type="text"
          required
          defaultValue={film ? film.image : ""}
        />
      </p>
      <p>
        <label htmlFor="description">description: </label>
        <input
          id="description"
          name="description"
          type="text"
          required
          defaultValue={film ? film.description : ""}
        />
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <Link to="/films">cancel</Link>
        <button type="submit">save</button>
      </div>
    </Form>
  );
};

export default FilmForm;
