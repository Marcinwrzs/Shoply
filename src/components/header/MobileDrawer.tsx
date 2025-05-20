import { Drawer, Box, List, ListItem, ListItemText } from "@mui/material";
import { topCategories } from "@/lib/categories";

type Props = {
  open: boolean;
  onClose: () => void;
  onCategoryClick: (category: string) => void;
};

const MobileDrawer = ({ open, onClose, onCategoryClick }: Props) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    <Box width={250} role="presentation" p={2}>
      <List>
        {Object.keys(topCategories).map((category) => (
          <ListItem
            key={category}
            onClick={() => onCategoryClick(category)}
            sx={{ cursor: "pointer" }}
          >
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default MobileDrawer;
