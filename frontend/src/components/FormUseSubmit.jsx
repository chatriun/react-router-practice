import { Box, Typography } from "@mui/material";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

const FilmUseSubmitForm = ({ film }) => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const newFilm = Object.fromEntries(formData.entries());

    submit(newFilm, { method: "POST" });
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      borderRadius={4}
      px={2}
      py={3}
      backgroundColor="#f5f5f5"
    >
      <Form method="post" onSubmit={handleSubmit}>
        <Typography variant=""></Typography>
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

export default FilmUseSubmitForm;
