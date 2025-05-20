import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavLink, useNavigate } from "react-router-dom";

import SearchBar from "@/components/header/SearchBar";
import DesktopMenu from "@/components/header/DesktopMenu";
import MobileDrawer from "@/components/header/MobileDrawer";
import SubcategoryDrawer from "@/components/header/SubcategoryDrawer";

const Header: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [subcategoryDrawerOpen, setSubcategoryDrawerOpen] =
    useState<boolean>(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);
  const isDesktop = useMediaQuery("(min-width:710px)");
  const navigate = useNavigate();

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
      <Box width="100%" p={2} sx={{ color: "black" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            <NavLink to="/">Shoply</NavLink>
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            {isDesktop ? (
              <SearchBar />
            ) : (
              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <LocalMallIcon />
          </Box>
        </Box>

        {isDesktop && (
          <DesktopMenu
            hoveredCategory={hoveredCategory}
            onMouseEnter={setHoveredCategory}
            onMouseLeave={() => setHoveredCategory(null)}
          />
        )}

        <MobileDrawer
          open={mobileMenuOpen}
          onClose={handleCloseAllDrawers}
          onCategoryClick={handleMobileCategoryClick}
        />

        <SubcategoryDrawer
          open={subcategoryDrawerOpen}
          onClose={handleCloseAllDrawers}
          category={activeMobileCategory}
          onSubcategoryClick={handleSubcategoryClick}
        />
      </Box>
    </header>
  );
};

export default Header;
