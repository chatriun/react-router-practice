import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate, useSubmit } from "react-router-dom";
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
    <Box>
      <Grid
        container
        display="flex"
        spacing={2}
        m={0}
        p={2}
        borderRadius={4}
        backgroundColor="white"
      >
        <Grid xs={12} md={2} display="flex" flexDirection="column" gap={2}>
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
          md={3}
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
          <Typography variant="subtitle2" mb={4} sx={{ color: "black" }}>
            {film.description}
          </Typography>
          <Box display="flex" gap={2} mt="auto" mb={1}>
            <Button
              variant="outlined"
              onClick={() => navigate("..", { relative: "path" })}
              sx={{
                flexWrap: "wrap",
                wordBreak: "break-all",
                borderRadius: 20,
                borderColor: "#8A2BE2",
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
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate("edit")}
              sx={{
                flexWrap: "wrap",
                wordBreak: "break-all",
                borderRadius: 20,
                backgroundColor: "#8A2BE2",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <EditNoteIcon fontSize="small" />
              <Typography
                variant="button"
                lineHeight={1}
                sx={{ color: "white" }}
              >
                edit
              </Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                flexWrap: "wrap",
                wordBreak: "break-all",
                borderRadius: 20,
                backgroundColor: "#8A2BE2",
                alignItems: "center",
                gap: "2px",
              }}
              onClick={handleDelete}
            >
              <CloseIcon fontSize="small" />
              <Typography
                variant="button"
                lineHeight={1}
                sx={{ color: "inherit" }}
              >
                delete
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <img
            src={film.url}
            alt={film.title}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilmItem;
