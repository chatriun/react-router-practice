import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/ErrorContent";
import MainNavigation from "../components/MainNavigation";
import { Box } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "an error occurred!";
  let message = "something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "something went wrong...";
    message = "Could not find resource or page.";
  }

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
      <ErrorContent title={title} message={message} />
    </Box>
  );
};

export default ErrorPage;
