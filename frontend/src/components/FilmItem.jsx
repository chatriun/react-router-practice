import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate, useSubmit } from "react-router-dom";
import { StyledButton } from "../style/styling";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";

const FilmItem = ({ film }) => {
  const navigate = useNavigate();
  const submit = useSubmit();
  const handleDelete = () => {
    const confirm = window.confirm("are you sure?");

    if (confirm) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <Grid
      container
      display="flex"
      spacing={2}
      m={0}
      p={2}
      borderRadius={4}
      backgroundColor="white"
    >
      <Grid
        xs={12}
        md={4}
        xl={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography
          variant="h2"
          fontWeight="bolder"
          width="100%"
          lineHeight="64px"
          sx={{
            // TODO:limit content
            // display: "-webkit-box",
            // WebkitBoxOrient: "vertical",
            // WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",

            color: "black",
            wordBreak: "keep-all",
            marginBottom: 2,
          }}
        >
          {film.title}
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          mb={5}
          sx={{ color: "#8A2BE2" }}
        >
          {film.date}
        </Typography>
        <Typography
          mb={4}
          sx={{
            color: "black",
            fontSize: { xs: "14px", md: "16px", xl: "20px" },
          }}
        >
          {film.description}
        </Typography>
        <Box display="flex" gap={2} mt="auto" mb={1}>
          <StyledButton
            variant="outlined"
            onClick={() => navigate("..", { relative: "path" })}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <ArrowBackIcon fontSize="small" sx={{ color: "#8A2BE2" }} />
            <Typography
              variant="button"
              lineHeight={1}
              sx={{ color: "#8A2BE2" }}
            >
              back
            </Typography>
          </StyledButton>
          <StyledButton
            variant="contained"
            size="small"
            onClick={() => navigate("edit")}
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <EditNoteIcon fontSize="small" sx={{ color: "white" }} />
            <Typography variant="button" lineHeight={1} sx={{ color: "white" }}>
              edit
            </Typography>
          </StyledButton>
          <StyledButton
            variant="contained"
            size="small"
            sx={{
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2px",
            }}
            onClick={handleDelete}
          >
            <CloseIcon fontSize="small" sx={{ color: "white" }} />
            <Typography variant="button" lineHeight={1} sx={{ color: "white" }}>
              delete
            </Typography>
          </StyledButton>
        </Box>
      </Grid>
      <Grid xs={12} md={8} xl={9}>
        <img
          src={film.url}
          alt={film.title}
          style={{
            borderRadius: "24px",
            objectFit: "cover",
            width: "100%",
            aspectRatio: "16/9",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FilmItem;
