import { FaReact, FaJs, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "../styles/Stacks.css"; 

function Stack() {
  return (
    <div className="stack-container">
      <h1>기술 스택</h1>
      <div className="stack-list">
        <div className="stack-item"><FaReact /> React</div>
        <div className="stack-item"><FaJs /> JavaScript</div>
        <div className="stack-item"><FaHtml5 /> HTML5</div>
        <div className="stack-item"><FaCss3Alt /> CSS3</div>
        <div className="stack-item"><SiMysql /> MySQL</div>
        
      </div>
    </div>
  );
}

export default Stack;
