import {
  Form,
  json,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, Typography, styled } from "@mui/material";
import FilmsList from "../components/FilmsList";
import { StyledButton, StyledTextField } from "../style/styling";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/films");

  if (!response.ok) {
    throw json({ message: "Could not fetch films..." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.films;
  }
};

const StyledIconButton = styled(Button)({
  padding: 0,
  minWidth: 0,
});

const FilmsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilm, setSearchFilm] = useState([]);
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const films = useLoaderData();

  const handleClearSearch = () => {
    setValue("");
    setSearchFilm(films);
    searchParams.delete("searchFilm");
    setSearchParams(searchParams);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const film = formData.get("searchFilm").trim();

    if (film) {
      searchParams.set("searchFilm", film);
    } else {
      searchParams.delete("searchFilm");
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const searchFilmQs = searchParams.get("searchFilm") ?? "";

    const searchFilmLc = searchFilmQs.toLowerCase();
    const searchFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchFilmLc)
    );
    setSearchFilm(searchFilms);
  }, [searchParams, films]);

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
      <Box display="flex" justifyContent="center" gap={2} pb={3} my={3}>
        <Form onSubmit={handleSearch}>
          <Box display="flex" alignItems="center">
            <StyledTextField
              label="search film..."
              name="searchFilm"
              size="small"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Box display="flex" gap={1}>
                    <StyledIconButton onClick={handleClearSearch}>
                      <CancelIcon sx={{ color: "black" }} />
                    </StyledIconButton>
                    <StyledIconButton type="submit">
                      <SearchIcon sx={{ color: "black" }} />
                    </StyledIconButton>
                  </Box>
                ),
              }}
            />
          </Box>
        </Form>
        <StyledButton
          variant="contained"
          size="small"
          onClick={() => navigate("new")}
        >
          <AddIcon fontSize="small" sx={{ color: "white" }} />
          <Typography variant="button" sx={{ color: "white" }}>
            add film
          </Typography>
        </StyledButton>
      </Box>

      <Grid container width="100%" spacing={2}>
        {searchFilm.map((film) => (
          <Grid key={film.id} xs={12} md={12 / 5} xl={12 / 7}>
            <FilmsList film={film} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilmsPage;
