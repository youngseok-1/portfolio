import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 로고 */}
        <Link to="/" className="logo">My Portfolio</Link>
        
        {/* 네비게이션 메뉴 */}
        <ul className="nav-menu">
          <li><Link to="/">소개</Link></li>
          <li><Link to="/projects">프로젝트</Link></li>
          <li><Link to="/stacks">기술 스택</Link></li>
          <li><Link to="/contact">연락</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
