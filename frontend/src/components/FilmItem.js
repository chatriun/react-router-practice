import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate, useSubmit } from "react-router-dom";

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
    <Box width="100%" p={2}>
      <Grid
        container
        display="flex"
        alignItems="center"
        spacing={2}
        m={0}
        p={1}
        border={1}
        borderColor="black"
        borderRadius={4}
        backgroundColor="white"
      >
        <Grid item sx={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontWeight="bolder"
              width="100%"
              textOverflow="ellipsis"
              sx={{ color: "black" }}
              lineHeight="42px"
              overflow="hidden"
              mr="auto"
              mb={1}
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
            <Typography variant="subtitle2" mb={4} sx={{ color: "black" }}>
              {film.description}
            </Typography>
            <Box item display="flex" gap={2} mt="auto" mb={1}>
              <Button
                variant="outlined"
                onClick={() => navigate("..", { relative: "path" })}
                sx={{ borderRadius: 20, borderColor: "#8A2BE2" }}
              >
                <Typography variant="button" sx={{ color: "#8A2BE2" }}>
                  ↩︎ back
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("edit")}
                sx={{ borderRadius: 20, backgroundColor: "#8A2BE2" }}
              >
                <Typography variant="button" sx={{ color: "white" }}>
                  ✎ edit
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 20, backgroundColor: "#8A2BE2" }}
                onClick={handleDelete}
              >
                <Typography variant="button" sx={{ color: "inherit" }}>
                  ✖︎ delete
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
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
