import { Link, json, useLoaderData } from "react-router-dom";
import FilmsList from "../components/FilmsList";
import { Box, Grid } from "@mui/material";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/films");

  if (!response.ok) {
    throw json({ message: "Could not fetch films..." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.films;
  }
};

const FilmsPage = () => {
  const films = useLoaderData();

  return (
    <Box>
      <button type="button">
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
      <Grid container display="flex" justifyContent="space-between">
        {films.map((film) => (
          <Grid item xs={3} md={2}>
            <FilmsList film={film} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilmsPage;
