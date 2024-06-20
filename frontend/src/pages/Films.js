import {
  Form,
  json,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import FilmsList from "../components/FilmsList";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
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

const StyledButton = styled(Button)({
  padding: 0,
  minWidth: 0,
});
const StyledTextField = styled(TextField)({
  "& label": {
    color: "black",
  },
  "& label.Mui-focused": {
    fontWeight: "bold",
    color: "#8A2BE2",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "black",
    },
    "& fieldset": {
      borderRadius: "12px",
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#9569bd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8A2BE2",
    },
  },
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
      <Form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "24px",
        }}
      >
        <Box width={300} display="flex" alignItems="center">
          <StyledTextField
            name="searchFilm"
            size="small"
            label="search film..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ my: 3 }}
            InputProps={{
              endAdornment: (
                <Box display="flex" gap={1}>
                  <StyledButton onClick={handleClearSearch}>
                    <CancelIcon sx={{ color: "grey" }} />
                  </StyledButton>
                  <StyledButton type="submit">
                    <SearchIcon sx={{ color: "black" }} />
                  </StyledButton>
                </Box>
              ),
            }}
          />
        </Box>
      </Form>

      <Grid container width="100%" spacing={2}>
        {searchFilm.map((film) => (
          <Grid key={film.id} xs={12} md={12 / 5} xl={12 / 7}>
            <FilmsList film={film} />
          </Grid>
        ))}
        <Grid
          xs={12}
          md={12 / 5}
          xl={12 / 7}
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
      </Grid>
    </Box>
  );
};

export default FilmsPage;
