import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { topCategories } from "@/lib/categories";

type Props = {
  open: boolean;
  onClose: () => void;
  category: string | null;
  onSubcategoryClick: (subcategory: string) => void;
};

const SubcategoryDrawer = ({
  open,
  onClose,
  category,
  onSubcategoryClick,
}: Props) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    <Box width={250} role="presentation" p={2}>
      <Typography variant="h6" gutterBottom>
        {category}
      </Typography>
      <List>
        {category &&
          topCategories[category].map((subcategory) => (
            <ListItem
              key={subcategory}
              onClick={() => onSubcategoryClick(subcategory)}
              sx={{ cursor: "pointer" }}
            >
              <ListItemText primary={subcategory.replace(/-/g, " ")} />
            </ListItem>
          ))}
      </List>
    </Box>
  </Drawer>
);

export default SubcategoryDrawer;
