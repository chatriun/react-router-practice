import { Box } from "@mui/material";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";

const FilmActionForm = ({ film }) => {
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

  return (
    <Box width="100%" p={2}>
      <Form method="patch">
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

export default FilmActionForm;
