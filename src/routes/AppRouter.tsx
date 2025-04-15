// src/routes/AppRouter.tsx
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
