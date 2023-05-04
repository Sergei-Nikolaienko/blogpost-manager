import { useRef } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../images/logo@2x.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={brandLogo} alt="brand logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
