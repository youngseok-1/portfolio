import { FaDiscord, FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css"; // CSS 적용

function Contact() {
  return (
    <div className="contact-page"> {/* 🔥 중앙 정렬을 위한 div 추가 */}
      <div className="contact-container">
        <h1>연락</h1>
        <div className="contact-item">
          <FaEnvelope /> 
          <span>이메일: <a href="mailto:whdudtjr0@gmail.com">whdudtjr0@gmail.com</a></span>
        </div>
        <div className="contact-item">
          <FaGithub /> 
          <span>GitHub: <a href="https://github.com/youngseok-1" target="_blank" rel="noopener noreferrer">youngseok-1</a></span>
        </div>
        <div className="contact-item">
          <FaDiscord /> 
          <span>디스코드: <strong>영석 / 25_47</strong></span>
        </div>
        <div className="contact-item">
          <FaPhone /> 
          <span>전화번호: <strong>010-2570-2549</strong></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
