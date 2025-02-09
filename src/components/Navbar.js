import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">소개</Link></li>
        <li><Link to="/projects">프로젝트</Link></li>
        <li><Link to="/stacks">기술 스택</Link></li>
        <li><Link to="/contact">연락</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;