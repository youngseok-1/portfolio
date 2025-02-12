import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // 아이콘 추가
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🔹 로고 */}
        <Link to="/" className="logo">My Portfolio</Link>

        {/* 🔹 햄버거 버튼 */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* 🔹 네비게이션 메뉴 */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>소개</Link>
          <Link to="/projects" onClick={toggleMenu}>프로젝트</Link>
          <Link to="/stacks" onClick={toggleMenu}>기술 스택</Link>
          <Link to="/contact" onClick={toggleMenu}>연락</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
