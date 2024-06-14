import { json, useLoaderData, useNavigate } from "react-router-dom";
import FilmsList from "../components/FilmsList";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

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
  const navigate = useNavigate();
  const films = useLoaderData();

  return (
    <Box width="100%" display="flex" flexWrap="wrap" px={2} py={4}>
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item sx={12} md={12 / 5} xl={12 / 8}>
            <FilmsList key={film.id} film={film} />
          </Grid>
        ))}
        <Grid>
          {/* TODO: hover button */}
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("new")}
            sx={{ borderRadius: 20, backgroundColor: "#8A2BE2" }}
          >
            <Typography variant="button" sx={{ color: "inherit" }}>
              + add film
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilmsPage;
