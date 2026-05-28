import SectionTitle from './SectionTitle.jsx';

const cards = [
  '이미지 기반 추천은 사용자의 진입 장벽을 낮출 수 있다.',
  '비슷한 취향의 리뷰는 장소 선택의 신뢰도를 높일 수 있다.',
  '상황별 추천은 선택 피로를 줄일 수 있다.',
];

export default function Hypothesis() {
  return (
    <section className="section-band section-accent reveal">
      <div className="container hypothesis">
        <SectionTitle eyebrow="Hypothesis" title="핵심 가설" align="center" tone="dark" />
        <h2 className="hypothesis__statement">
          사용자의 착장과 무드를 기반으로 장소를 추천하면, 장소 선택 과정은 검색이 아니라 큐레이션 경험이 된다.
        </h2>
        <div className="hypothesis__cards">
          {cards.map((card, index) => (
            <article className="hypothesis-card lift-card" key={card}>
              <span>H{index + 1}</span>
              <p>{card}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
