import { FaDiscord, FaPhone, FaGithub, FaEnvelope } from "react-icons/fa"; // 아이콘 불러오기

function Contact() {
  return (
    <div>
      <h1>연락처</h1>
      <p>
        <FaEnvelope /> 이메일: <a href="mailto:whdudtjr0@gmail.com">whdudtjr0@gmail.com</a>
      </p>
      <p>
        <FaGithub /> GitHub:{" "}
        <a href="https://github.com/youngseok-1" target="_blank" rel="noopener noreferrer">
          youngseok-1
        </a>
      </p>
      <p>
        <FaDiscord /> 디스코드: <strong>영석 / 25_47</strong>
      </p>
      <p>
        <FaPhone /> 전화번호: <a>010-2570-2549</a>
      </p>
    </div>
  );
}

export default Contact;
