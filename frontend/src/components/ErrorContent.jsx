import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorContent = ({ title, message }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" fontWeight="28px">
        {title}
      </Typography>
      <Typography variant="h5" mb={3}>
        {message}
      </Typography>
      <Typography variant="caption">
        go back to <Link to="/">home</Link>
      </Typography>
    </Box>
  );
};

export default ErrorContent;
