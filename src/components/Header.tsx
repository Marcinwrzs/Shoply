import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TextField from "@mui/material/TextField";
import { topCategories } from "@/lib/categories";

const Header: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [subcategoryDrawerOpen, setSubcategoryDrawerOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);
  const isDesktop = useMediaQuery("(min-width:710px)");
  const navigate = useNavigate();

  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const handleMobileCategoryClick = (category: string) => {
    setActiveMobileCategory(category);
    setSubcategoryDrawerOpen(true);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    navigate(`/category/${subcategory}`);
    setMobileMenuOpen(false);
    setSubcategoryDrawerOpen(false);
  };

  const handleCloseAllDrawers = () => {
    setMobileMenuOpen(false);
    setSubcategoryDrawerOpen(false);
    setActiveMobileCategory(null);
  };

  return (
    <header>
      <Box width="100%" p={2} position="relative" sx={{ color: "black" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            <NavLink to="/">Shoply</NavLink>
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            {isDesktop ? (
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
              />
            ) : (
              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <LocalMallIcon />
          </Box>
        </Box>

        {isDesktop && (
          <Box onMouseLeave={handleMouseLeave}>
            <Box display="flex" gap={4} mt={2}>
              {Object.keys(topCategories).map((category) => (
                <Box
                  key={category}
                  className="menu"
                  onMouseEnter={() => handleMouseEnter(category)}
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
                onMouseLeave={handleMouseLeave}
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
        )}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleCloseAllDrawers}
        >
          <Box width={250} role="presentation" p={2}>
            <List>
              {Object.keys(topCategories).map((category) => (
                <ListItem
                  button
                  key={category}
                  onClick={() => handleMobileCategoryClick(category)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Drawer
          anchor="right"
          open={subcategoryDrawerOpen}
          onClose={handleCloseAllDrawers}
        >
          <Box width={250} role="presentation" p={2}>
            <Typography variant="h6" gutterBottom>
              {activeMobileCategory}
            </Typography>
            <List>
              {activeMobileCategory &&
                topCategories[activeMobileCategory].map((subcategory) => (
                  <ListItem
                    button
                    key={subcategory}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    <ListItemText primary={subcategory.replace(/-/g, " ")} />
                  </ListItem>
                ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
