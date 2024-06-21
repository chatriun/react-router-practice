import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate, useSubmit } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../style/styling";

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
      <Grid xs={12} md={2.5} display="flex" flexDirection="column" gap={2}>
        <Typography
          fontSize={{ xs: 0, md: 150, xl: 220 }}
          lineHeight={{ md: 0.7 }}
          mb="auto"
          sx={{ color: "#8A2BE2" }}
        >
          ✸
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bolder"
          width="100%"
          textOverflow="ellipsis"
          lineHeight="42px"
          overflow="hidden"
          sx={{ color: "black", wordBreak: "keep-all" }}
        >
          {film.title}
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={3.5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
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
              gap: "2px",
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
      <Grid xs={12} md={6}>
        <img
          src={film.url}
          alt={film.title}
          style={{
            borderRadius: "12px",
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
