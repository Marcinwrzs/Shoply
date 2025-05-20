import { TextField } from "@mui/material";

const SearchBar: React.FC = () => (
  <TextField
    id="outlined-basic"
    label="Outlined"
    variant="outlined"
    size="small"
    sx={{
      width: "200px",
      "& .MuiOutlinedInput-root": {
        color: "black",
        "& fieldset": { borderColor: "black" },
        "&:hover fieldset": { borderColor: "black" },
        "&.Mui-focused fieldset": { borderColor: "black" },
      },
      "& .MuiInputLabel-root": { color: "black" },
      "& .MuiInputLabel-root.Mui-focused": { color: "black" },
    }}
  />
);

export default SearchBar;
