import { Link } from "react-router-dom";

import { CategoryMenu } from "./CategoryMenu";

const Header = () => {
  return (
    <header className="bg-background shadow-md">
      <div className="container py-4 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center self-center">Shoply</h1>
        <CategoryMenu />
      </div>
    </header>
  );
};

export default Header;
