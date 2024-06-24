import { Box, Typography } from "@mui/material";
import { StyledButton } from "../style/styling";
import { useNavigate } from "react-router-dom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      sx={{ background: "#2d2741" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={800}
        px={{ xs: 10, md: 20 }}
      >
        <Typography
          variant="h2"
          fontWeight="bolder"
          width="100%"
          lineHeight="64px"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",

            color: "#8A2BE2",
            wordBreak: "keep-all",
          }}
        >
          welcome :)
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bolder"
          width="100%"
          lineHeight="50px"
          mb={2}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",

            color: "white",
            wordBreak: "keep-all",
          }}
        >
          favorite movie
        </Typography>
        <Typography
          variant="body1"
          mb={4}
          sx={{
            color: "white",
            lineHeight: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {/* mock text */}
          router practice w/react router Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Box display="flex" justifyContent="flex-start" gap={2}>
          <StyledButton
            variant="contained"
            size="small"
            onClick={() => navigate("/films")}
            sx={{
              px: 3,
              gap: 0.5,
            }}
          >
            <AutoAwesomeIcon fontSize="small" sx={{ color: "white" }} />
            <Typography variant="button" sx={{ color: "white" }}>
              get start
            </Typography>
          </StyledButton>
          <StyledButton
            variant="outlined"
            size="small"
            border="2px"
            onClick={() => navigate("/films/new")}
          >
            <MovieFilterIcon fontSize="medium" sx={{ color: "#8A2BE2" }} />
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
