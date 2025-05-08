import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { topCategories } from "@/lib/categories";

type Props = {
  hoveredCategory: string | null;
  onMouseEnter: (category: string) => void;
  onMouseLeave: () => void;
};

const DesktopMenu = ({
  hoveredCategory,
  onMouseEnter,
  onMouseLeave,
}: Props) => (
  <Box onMouseLeave={onMouseLeave}>
    <Box display="flex" gap={4} mt={2}>
      {Object.keys(topCategories).map((category) => (
        <Box
          key={category}
          className="menu"
          onMouseEnter={() => onMouseEnter(category)}
        >
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            {category}
          </button>
        </Box>
      ))}
    </Box>

    <Divider sx={{ width: "620px" }} />

    {hoveredCategory && (
      <Box
        position="fixed"
        left={0}
        right={0}
        bgcolor="white"
        zIndex={99}
        p={2}
        top={95}
        sx={{ zIndex: "9999" }}
      >
        <ul
          style={{
            listStyle: "none",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 10%",
          }}
        >
          {topCategories[hoveredCategory].map((subcategory) => (
            <li key={subcategory} style={{ marginBottom: "8px" }}>
              <Link
                to={`/category/${subcategory}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1rem",
                }}
              >
                {subcategory.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
          <Divider />
        </ul>
      </Box>
    )}
  </Box>
);

export default DesktopMenu;
