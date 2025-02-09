import washplanPreview from "../assets/images/washplan1.png"
import nhjPreview from "../assets/images/nhj1.png"


function Projects() {
  return (
    <div>
      <h1>프로젝트 목록</h1>
      <p><strong>1.</strong></p>
      <p><strong>프로젝트 이름:</strong> WashPlan</p>
      <p><strong>개발 기간:</strong> 2024-11-20 ~ 2025-01-30</p>
      <p><strong>담당 도메인:</strong> 로그인 / 회원가입 / 아이디,비밀번호 찾기 / 마이페이지 / FAQ / 공지사항</p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/PPal-Ajo/WashPlan" target="_blank" rel="noopener noreferrer">
          https://github.com/PPal-Ajo/WashPlan
        </a>
      </p>
      <p><strong>미리보기 : <image></image></strong></p>
      <img src={washplanPreview} alt="WashPlan 미리보기" style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
      <hr></hr>


      <p><strong>2.</strong></p>
      <p><strong>프로젝트 이름:</strong> 남이 이야기해주는 호러 정원</p>
      <p><strong>개발 기간:</strong> 2024-10-17 ~ 2024-11-19</p>
      <p><strong>담당 도메인:</strong> 관리자/유저/공지사항/게시물 관리</p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/MergePing/NamHoJung" target="_blank" rel="noopener noreferrer">
          https://github.com/MergePing/NamHoJung
        </a>
      </p>
      <p><strong>미리보기 : <image></image></strong></p>
      <img src={nhjPreview} alt="NHJ 미리보기" style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }} />
      

    </div>

    
  );
}

export default Projects;