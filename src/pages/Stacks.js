import "../styles/Stacks.css"; // 스타일 적용

function Stack() {
  return (
    <div className="stack-container">
      <h1>기술 스택</h1>
      <p className="stack-description">
        현재까지 익힌 기술이며, 더 많은 기술을 배우고 활용하기 위해 노력 중입니다. 💡
      </p>
      <div className="stack-list">
        <div className="stack-item">
          <img src="/icons/react.svg" alt="React" className="icon-img" />
          React
        </div>
        <div className="stack-item">
          <img src="/icons/javascript.svg" alt="JavaScript" className="icon-img" />
          JavaScript
        </div>
        <div className="stack-item">
          <img src="/icons/html5.svg" alt="HTML5" className="icon-img" />
          HTML5
        </div>
        <div className="stack-item">
          <img src="/icons/css3.svg" alt="CSS3" className="icon-img" />
          CSS3
        </div>
        <div className="stack-item">
          <img src="/icons/mysql.svg" alt="MySQL" className="icon-img" />
          MySQL
        </div>
        <div className="stack-item">
          <img src="/icons/intellij.svg" alt="IntelliJ" className="icon-img" />
          IntelliJ
        </div>
        <div className="stack-item">
          <img src="/icons/vscode.svg" alt="VS Code" className="icon-img" />
          VS Code
        </div>
        <div className="stack-item">
          <img src="/icons/springboot.svg" alt="Spring Boot" className="icon-img" />
          Spring Boot
        </div>
        <div className="stack-item">
          <img src="/icons/mybatis.svg" alt="MyBatis" className="icon-img" />
          MyBatis
        </div>
      </div>
    </div>
  );
}

export default Stack;
