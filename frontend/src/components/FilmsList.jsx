import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FilmsList = ({ film }) => {
  return (
    <Link to={film.id} style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        width={235}
        // height="100%"
        p={1}
        border={1}
        borderColor="black"
        borderRadius={4}
        backgroundColor="white"
        style={{ overflow: "hidden" }}
      >
        <Box>
          <img
            src={film.url}
            alt={film.title}
            width="100%"
            // width={235}
            height={319.5}
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </Box>
        {/* TODO: textOverflow: "ellipsis" not work
        now>> width*/}
        <Typography
          style={{
            width: "100%",
            color: "black",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {film.title}
        </Typography>
      </Box>
    </Link>
  );
};

export default FilmsList;
