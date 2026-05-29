import serviceImage from '../assets/service.png';

export default function ServiceConcept() {
  return (
    <section className="service-concept reveal">
      <div className="container service-concept__inner">
        <header className="service-concept__header">
          <p>Service Concept</p>
          <span>
            맛과멋은 사용자의 착장, 무드, 상황을 기반으로 어울리는 장소를 추천하고<br />
            저장과 예약까지 자연스럽게 이어주는 감각 기반 장소 큐레이션 서비스입니다.
          </span>
        </header>

        <img className="service-concept__image" src={serviceImage} alt="Logo Motive" />
      </div>
    </section>
  );
}
