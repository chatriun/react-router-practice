import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FilmsList = ({ film }) => {
  return (
    <Link to={film.id} style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        width="100%"
        height="100%"
        p={1}
        border={1}
        borderColor="black"
        borderRadius={4}
        backgroundColor="white"
        sx={{ overflow: "hidden" }}
      >
        <Box display="flex" height={320} sx={{ overflow: "hidden" }}>
          <img
            src={film.url}
            alt={film.title}
            width="100%"
            style={{
              objectFit: "cover",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          width="100%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{ color: "black" }}
        >
          {film.title}
        </Typography>
      </Box>
    </Link>
  );
};

export default FilmsList;
