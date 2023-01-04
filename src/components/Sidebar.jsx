import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((categories) => (
      <button>
        <span>{categories.icon}</span>
        <span>{categories.name}</span>
      </button>
    ))}
  </Stack>
);
export default sidebar;
