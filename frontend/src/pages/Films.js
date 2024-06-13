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

      <Box width="100%" display="flex" flexWrap="wrap" gap={5} py={12}>
        {films.map((film) => (
          <FilmsList key={film.id} film={film} />
        ))}
      </Box>
    </Box>
  );
};

export default FilmsPage;
