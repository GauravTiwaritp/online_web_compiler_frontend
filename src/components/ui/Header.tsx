import { Link } from "react-router-dom";
import { Button } from "./button";
const Header = () => {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        {" "}
        <h2 className="font-bold select-none">Online wd compiler</h2>{" "}
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            {" "}
            <Button>Compiler</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
