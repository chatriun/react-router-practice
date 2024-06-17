import {
  Form,
  json,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom";
import FilmsList from "../components/FilmsList";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddIcon from "@mui/icons-material/Add";

// export const loader = async () => {
//   const response = await fetch("http://localhost:8080/films");

//   if (!response.ok) {
//     throw json({ message: "Could not fetch films..." }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData.films;
//   }
// };
export const searchLoader = async ({ request }) => {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);
  const searchFilm = queryParams.get("searchFilm");

  const response = await fetch(`http://localhost:8080/films/${searchFilm}`);

  if (!response.ok) {
    throw json({ message: "Could not find a film" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

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
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const films = useLoaderData();

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchFilm = formData.get("searchFilm");

    const querySearch = new URLSearchParams({ searchFilm: searchFilm });
    const querySearchString = querySearch.toString();

    setSearchParams(querySearchString);
    // setSearchParams("searchFilm", searchFilm);
  };

  return (
    <Box width="100%" display="flex" flexWrap="wrap" px={2} py={4}>
      <Form onSubmit={handleSearch}>
        <input
          name="searchFilm"
          type="string"
          // onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">search</button>
      </Form>
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid key={film.id} item xs={12} md={12 / 5} xl={12 / 8}>
            <FilmsList film={film} />
          </Grid>
        ))}
        <Grid>
          {/* TODO: hover button */}
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("new")}
            sx={{
              borderRadius: 20,
              backgroundColor: "#8A2BE2",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <AddIcon fontSize="small" />
            <Typography variant="button" sx={{ color: "inherit" }}>
              add film
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilmsPage;
