import {
  Form,
  Link,
  json,
  redirect,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

export const editFilmAction = async ({ request, params }) => {
  const filmId = params.filmId;
  const data = await request.formData();

  const editedData = {
    title: data.get("title"),
    date: data.get("date"),
    url: data.get("url"),
    description: data.get("description"),
  };

  const response = await fetch(`http://localhost:8080/films/${filmId}`, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedData),
  });

  if (!response.ok) {
    throw json({ message: "Could not edit this film..." }, { status: 500 });
  }

  return redirect("/films");
};

const FilmForm = ({ method, film }) => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

  const handleSave = () => {
    if (method === "post") {
      submit(data, { method: "POST" });
    }
  };

  return (
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
        <label htmlFor="url">url: </label>
        <input
          id="url"
          name="url"
          type="text"
          required
          defaultValue={film ? film.url : ""}
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
        <button type="submit" onClick={handleSave}>
          {isSubmit ? "submitting" : "save"}
        </button>
      </div>
    </Form>
  );
};

export default FilmForm;
