import { Box, Typography } from "@mui/material";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { StyledButton, StyledTextField } from "../style/styling";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CloseIcon from "@mui/icons-material/Close";

const FilmUseSubmitForm = ({ film }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const submit = useSubmit();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const newFilm = Object.fromEntries(formData.entries());

  //   submit(newFilm, { method: "POST" });
  // };

  return (
    <Grid
      container
      flexWrap="wrap"
      borderRadius={4}
      px={2}
      py={3}
      m={0}
      backgroundColor="#f5f5f5"
      spacing={2}
      sx={{ color: "black" }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        xs={12}
        md={4}
      >
        {/* TODO: useSubmit() */}
        {/* <Form method="post" onSubmit={handleSubmit}> */}
        <Form method="post">
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            borderRadius={4}
            px={4}
            py={5}
            border={1}
            borderColor="black"
            gap={2}
          >
            {/* TODO: align-items */}
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  flexWrap: "wrap",
                  wordBreak: "break-word",
                }}
              >
                add new film
              </Typography>
              <MovieFilterIcon fontSize="large" sx={{ color: "black" }} />
            </Box>
            {/* </Grid> */}
            {/* <Grid xs={12} md={4}> */}
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((error) => (
                  <li key={error}>
                    <span style={{ color: "red" }}>{error}</span>
                  </li>
                ))}
              </ul>
            )}
            <StyledTextField
              label="title"
              name="title"
              type="text"
              size="small"
              defaultValue={film ? film.title : ""}
            />
            {/* TODO: color icon */}
            <StyledTextField
              name="date"
              type="date"
              size="small"
              defaultValue={film ? film.date : ""}
            />
            <StyledTextField
              label="url image"
              name="url"
              type="text"
              size="small"
              defaultValue={film ? film.url : ""}
            />
            <StyledTextField
              label="description"
              name="description"
              type="text"
              size="small"
              multiline
              defaultValue={film ? film.description : ""}
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              gap={1}
              mt="auto"
              mb={1}
            >
              <StyledButton
                variant="outlined"
                onClick={() => navigate("/films")}
                sx={{
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <CloseIcon fontSize="small" sx={{ color: "#8A2BE2" }} />
                <Typography
                  variant="button"
                  lineHeight={1}
                  sx={{ color: "#8A2BE2" }}
                >
                  cancel
                </Typography>
              </StyledButton>
              <StyledButton variant="contained" size="small" type="submit">
                <Typography
                  variant="button"
                  lineHeight={1}
                  sx={{ color: "white" }}
                >
                  {isSubmit ? "submitting" : "save"}
                </Typography>
              </StyledButton>
            </Box>
          </Box>
        </Form>
      </Grid>
      <Grid xs={12} md={8}>
        <img
          src="https://wp.stanforddaily.com/wp-content/uploads/2021/03/008_NML_SG_00626.jpg"
          alt="nomadland-2020"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "24px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FilmUseSubmitForm;
