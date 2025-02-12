import "../styles/Home.css"; 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>프로그래밍을 사랑하는 개발자, 더 나은 소프트웨어를 만들기 위해 노력합니다.</p>
        <Link to="/projects" className="cta-button">프로젝트 보기</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h2>🚀 최신 기술 활용</h2>
          <p>React, Spring Boot, MySQL, MyBatis 등 다양한 기술 스택을 경험하고 있습니다.</p>
        </div>
        <div className="feature-item">
          <h2>💡 지속적인 학습</h2>
          <p>더 나은 코드를 작성하기 위해 끊임없이 공부하며 성장하는 개발자입니다.</p>
        </div>
        <div className="feature-item">
          <h2>🎯 문제 해결 능력</h2>
          <p>효율적인 알고리즘과 데이터베이스 설계를 통해 문제를 해결합니다.</p>
        </div>
      </section>

      {/* Resume Download Button */}
      <section className="resume-section">
        <a href="/resume.pdf" download className="resume-button">
          📄 이력서 다운로드
        </a>
      </section>
    </div>
  );
}

export default Home;
