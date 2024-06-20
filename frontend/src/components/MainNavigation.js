import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const styleActive = {
    color: "white",
    textDecoration: "white wavy underline",
  };

  return (
    <Box width="100%">
      <Box px={3} py={1} borderRadius={12} sx={{ backgroundColor: "#8A2BE2" }}>
        <Box display="flex" justifyContent="center" gap={2}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? styleActive : { textDecoration: "none" }
            }
          >
            <Typography variant="button">Home</Typography>
          </NavLink>

          <NavLink
            to="/films"
            style={({ isActive }) =>
              isActive ? styleActive : { textDecoration: "none" }
            }
          >
            <Typography variant="button">Films</Typography>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default MainNavigation;
