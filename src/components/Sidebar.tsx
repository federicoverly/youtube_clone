import { Stack } from "@mui/system";
import React, { Dispatch, SetStateAction } from "react";
import { categories } from "../utils/constants";

interface IProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: IProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        hight: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "#000",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
