import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "../styles/Projects.css";

import { useRef } from "react"; 

import washplan1 from "../assets/images/washplan1.png";
import washplan2 from "../assets/images/washplan2.png";
import washplan3 from "../assets/images/washplan3.png";
import washplan4 from "../assets/images/washplan4.png";
import washplan5 from "../assets/images/washplan5.png";    
import nhj1 from "../assets/images/nhj1.png";
import nhj2 from "../assets/images/nhj2.png";
import nhj3 from "../assets/images/nhj3.png";
import nhj4 from "../assets/images/nhj4.png";


function Projects() {
  // 슬라이더 참조 (각 프로젝트별 개별 슬라이더)
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // 슬라이드 옵션 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 3000, // 3초마다 변경
    arrows: false, // 기본 화살표 제거
  };

  return (
    <div className="projects-container">
      <h1>프로젝트 목록</h1>

      {/* WashPlan 프로젝트 */}
      <div className="project">
        <h2>WashPlan</h2>
        <p><strong>개발 기간:</strong> 2024-11-20 ~ 2025-01-30</p>
        <p><strong>담당 도메인:</strong> 로그인 / 회원가입 / 마이페이지 / FAQ / 공지사항</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/PPal-Ajo/WashPlan" target="_blank" rel="noopener noreferrer">
            WashPlan GitHub Repository
          </a>
        </p>
        {/* 슬라이드 이미지 (클릭 시 다음 슬라이드 이동) */}
        <Slider ref={sliderRef1} {...settings} className="project-slider">
          <div onClick={() => sliderRef1.current.slickNext()}><img src={washplan1} alt="WashPlan Preview 1" /></div>
          <div onClick={() => sliderRef1.current.slickNext()}><img src={washplan2} alt="WashPlan Preview 2" /></div>
          <div onClick={() => sliderRef1.current.slickNext()}><img src={washplan3} alt="WashPlan Preview 3" /></div>
          <div onClick={() => sliderRef1.current.slickNext()}><img src={washplan4} alt="WashPlan Preview 4" /></div>
          <div onClick={() => sliderRef1.current.slickNext()}><img src={washplan5} alt="WashPlan Preview 5" /></div>
        </Slider>
      </div>

      {/* 남이 이야기해주는 호러 정원 프로젝트 */}
      <div className="project">
        <h2>남이 이야기해주는 호러 정원</h2>
        <p><strong>개발 기간:</strong> 2024-10-17 ~ 2024-11-19</p>
        <p><strong>담당 도메인:</strong> 관리자 / 유저 / 공지사항 / 게시물 관리</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/MergePing/NamHoJung" target="_blank" rel="noopener noreferrer">
            NamHoJung GitHub Repository
          </a>
        </p>
        {/* 슬라이드 이미지 (클릭 시 다음 슬라이드 이동) */}
        <Slider ref={sliderRef2} {...settings} className="project-slider">
          <div onClick={() => sliderRef2.current.slickNext()}><img src={nhj1} alt="NHJ Preview 1" /></div>
          <div onClick={() => sliderRef2.current.slickNext()}><img src={nhj2} alt="NHJ Preview 2" /></div>
          <div onClick={() => sliderRef2.current.slickNext()}><img src={nhj3} alt="NHJ Preview 3" /></div>
          <div onClick={() => sliderRef2.current.slickNext()}><img src={nhj4} alt="NHJ Preview 4" /></div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
