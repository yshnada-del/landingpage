import iaDiagram from '../assets/ia.svg';

export default function InformationArchitecture() {
  return (
    <section className="section-band information-architecture reveal">
      <div className="container ia-container">
        <div className="ia-header">
          <p>Information Architecture</p>
          <span>
            착장 기반 추천부터 무드·상황별 탐색, 리뷰와 예약까지 자연스럽게 이어지도록 설계했어요
          </span>
        </div>

        <figure className="ia-image-wrap" aria-label="맛과멋 정보 구조도">
          <img src={iaDiagram} alt="맛과멋 Information Architecture" />
        </figure>
      </div>
    </section>
  );
}
