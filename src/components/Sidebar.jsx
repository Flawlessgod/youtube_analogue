import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      // if button.name is selected button then set colour
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)} // on sidebar click changes selected for url
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>

        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.5",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default sidebar;
