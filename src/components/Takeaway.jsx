import logo from '../assets/logo.png';

export default function Takeaway() {
  return (
    <section className="closing-section">
      <div className="container closing-section__inner">
        <img src={logo} alt="맛과멋" />
        <p>
          맛과멋은 오늘의 스타일과 분위기에 맞는 장소를 제안하고,<br />
          당신의 하루가 <strong>더 좋은 선택</strong>으로 이어지도록 돕습니다.
        </p>
      </div>
    </section>
  );
}
