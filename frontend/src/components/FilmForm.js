import { Box } from "@mui/material";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

// TODO: submit add & edit film form with useSubmit()
const FilmForm = ({ method, film }) => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

  const handleSave = () => {
    console.log(data);
    if (method === "post") {
      submit(undefined, { method: "POST" });
    }
  };

  return (
    <Box width="100%" p={2}>
      <Form
        method={method}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
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
          <button type="submit">{isSubmit ? "submitting" : "save"}</button>
        </div>
      </Form>
    </Box>
  );
};

export default FilmForm;
