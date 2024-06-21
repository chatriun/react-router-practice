import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { StyledButton, StyledTextField } from "../style/styling";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";

const FilmActionForm = ({ film }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmit = navigation.state === "submitting";

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
    >
      {/* TODO: handle error */}
      {/* {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>
                <span style={{ color: "red" }}>{error}</span>
              </li>
            ))}
          </ul>
        )} */}
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        xs={12}
        md={4}
        xl={3}
        sx={{ color: "black" }}
      >
        <Form method="patch">
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
              <EditNoteIcon
                sx={{ color: "#8A2BE2", fontSize: { xs: "80px", md: "64px" } }}
              />
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  flexWrap: "wrap",
                  wordBreak: "break-word",
                  lineHeight: "45px",
                  color: "#8A2BE2",
                }}
              >
                edit detail...
              </Typography>
            </Box>
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
              required
              defaultValue={film ? film.title : ""}
            />
            {/* TODO: color icon */}
            <StyledTextField
              name="date"
              type="date"
              size="small"
              required
              defaultValue={film ? film.date : ""}
            />
            <StyledTextField
              label="url image"
              name="url"
              type="text"
              size="small"
              required
              defaultValue={film ? film.url : ""}
            />
            <StyledTextField
              label="description"
              name="description"
              type="text"
              size="small"
              multiline
              required
              defaultValue={film ? film.description : ""}
            />
            <Box display="flex" justifyContent="flex-end" gap={1} mt={3} mb={1}>
              <StyledButton
                variant="outlined"
                onClick={() => navigate("..", { relative: "path" })}
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
                  {isSubmit ? "submitting" : "update"}
                </Typography>
              </StyledButton>
            </Box>
          </Box>
        </Form>
      </Grid>
      <Grid xs={12} md={8} xl={9}>
        <Box position="relative" width="100%" height="100%">
          <img
            src={film.url}
            alt="film"
            style={{
              filter: "grayscale(100%)",
              objectFit: "cover",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "24px",
            }}
          />
          {/* TODO: text warp */}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
              height: "100%",

              position: "absolute",
              top: 0,
              left: 0,
              textAlign: "center",

              fontSize: { xs: "32px", md: "48px", xl: "64px" },
              lineHeight: { xs: "32px", md: "48px", xl: "64px" },
              textTransform: "lowercase",
              fontWeight: "bold",
              wordWrap: "break-word",
            }}
          >
            {film.title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FilmActionForm;
