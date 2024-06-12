import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const FilmsList = ({ film }) => {
  return (
    <Box width="100%" pb={2} alignContent="flex-start">
      <Link to={film.id} style={{ textDecoration: "none", color: "inherit" }}>
        <Box
          width={188}
          height={316}
          border={1}
          borderColor="black"
          borderRadius={4}
          backgroundColor="white"
          style={{ overflow: "hidden" }}
        >
          <img
            src={film.url}
            alt={film.title}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
          <span style={{ color: "black", marginBottom: 2 }}>{film.title}</span>
        </Box>
      </Link>
    </Box>
  );
};

export default FilmsList;
