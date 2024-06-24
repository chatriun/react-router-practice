import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootFilmLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      gap={2}
      p={3}
      sx={{ backgroundColor: "#2d2741" }}
    >
      <MainNavigation />
      <Outlet />
    </Box>
  );
};

export default RootFilmLayout;
