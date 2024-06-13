import { Box, Button, Typography } from "@mui/material";
import { Link, useSubmit } from "react-router-dom";

const FilmItem = ({ film }) => {
  const submit = useSubmit();
  const handleDelete = () => {
    const confirm = window.confirm("are you sure?");

    if (confirm) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      p={3}
      border={1}
      borderColor="black"
      borderRadius={4}
      backgroundColor="white"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width={200}
      >
        <Typography variant="h1" lineHeight="30px" style={{ color: "#8A2BE2" }}>
          ✸
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bolder"
          mb={3}
          lineHeight="40px"
          style={{ color: "black" }}
        >
          {film.title}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width={400}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          style={{ color: "black" }}
        >
          {film.date}
        </Typography>
        <p
          style={{
            color: "black",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {film.description}
          </span>
        </p>
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            style={{ borderRadius: 20, borderColor: "#8A2BE2" }}
          >
            <Link
              to=".."
              relative="path"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography variant="button" style={{ color: "#8A2BE2" }}>
                ↩︎ back
              </Typography>
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ borderRadius: 20, backgroundColor: "#bf94e4" }}
          >
            <Link
              to="edit"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ✎ edit
            </Link>
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ borderRadius: 20, backgroundColor: "#bf94e4" }}
            onClick={handleDelete}
          >
            <Typography variant="button" style={{ color: "inherit" }}>
              ✖︎ delete
            </Typography>
          </Button>
        </Box>
      </Box>
      <img
        src={film.url}
        alt={film.title}
        style={{
          height: "auto",
          width: 600,
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </Box>
  );
};

export default FilmItem;
