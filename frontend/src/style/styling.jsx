import { Button, TextField, styled } from "@mui/material";

export const StyledButton = styled(Button)({
  padding: "8px 12px",
  wordBreak: "break-word",
  "&.MuiButton-outlined": {
    border: "1px solid #8A2BE2",
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "#e8d4f9",
      border: "1px solid #531988",
    },
  },
  "&.MuiButton-contained": {
    color: "#8A2BE2",
    backgroundColor: "#8A2BE2",
    border: "1px solid #8A2BE2",
    borderRadius: 20,
    "&:hover": {
      border: "1px solid #6e22b6",
      backgroundColor: "#6e22b6",
    },
  },
});

export const StyledTextField = styled(TextField)({
  // TODO: hover?
  // background: "pink",
  "& label": {
    color: "black",
  },
  "& label.Mui-focused": {
    fontWeight: "bold",
    color: "#8A2BE2",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "black",
    },
    "& fieldset": {
      borderRadius: "12px",
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#9569bd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8A2BE2",
    },
  },
});
