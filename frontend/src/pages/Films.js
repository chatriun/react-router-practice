import {
  json,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import FilmsList from "../components/FilmsList";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

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
  const [searchFilm, setSearchFilm] = useState([]);

  const navigate = useNavigate();
  const films = useLoaderData();

  const handleSearch = (_, film) => {
    const searchTitle = film.map((film) => film.title);

    const querySearch = new URLSearchParams({ searchFilm: searchTitle });
    const querySearchString = querySearch.toString();

    setSearchParams(querySearchString);
    setSearchFilm(film);
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      px={2}
      py={4}
      backgroundColor="white"
    >
      <Box display="flex" width="100%" mb={3}>
        <Autocomplete
          multiple
          limitTags={3}
          options={films}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(options, value) =>
            options.title === value.title
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="enter film title"
            />
          )}
          onChange={handleSearch}
        />
      </Box>
      <Grid container width="100%" spacing={2}>
        {searchFilm.length > 0 ? (
          searchFilm.map((film) => (
            <Grid key={film.id} item xs={12} md={12 / 5} xl={12 / 8}>
              <FilmsList film={film} />
            </Grid>
          ))
        ) : (
          <>
            {films.map((film) => (
              <Grid key={film.id} item xs={12} md={12 / 5} xl={12 / 8}>
                <FilmsList film={film} />
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              md={12 / 5}
              xl={12 / 8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
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
          </>
        )}
      </Grid>
    </Box>
  );
};

export default FilmsPage;
