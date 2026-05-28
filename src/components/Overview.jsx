const overviewCards = [
  '“오늘 입은 옷이랑 어울리는 곳, 어디 없을까?”',
  '사진은 많은데 내 분위기와 맞는지는 알기 어렵다',
  '“데이트 장소 고르는데 또 한 시간째야…”',
  '별점보다 오늘의 무드에 맞는 추천이 필요하다',
];

export default function Overview() {
  return (
    <section className="section-band overview-section reveal">
      <div className="container overview overview--case">
        <div className="overview__intro">
          <p className="eyebrow">Overview</p>
          <h2>
            장소 추천은 많은데,
            <br />
            오늘의 나와 맞는 곳은 왜 찾기 어려울까?
          </h2>
          <p>
            맛과멋은 사용자의 착장과 무드, 상황을 기반으로
            <br />
            어울리는 식당과 장소를 추천하는 모바일 서비스입니다.
            <br />
            장소 선택을 검색이 아닌 취향과 맥락에 맞춘 큐레이션 경험으로 바꿉니다.
          </p>
        </div>

        <div className="overview__quote-cloud" aria-label="맛과멋 서비스 문제 인식">
          {overviewCards.map((card, index) => (
            <article className={`overview-quote overview-quote--${index + 1}`} key={card}>
              <span>{card}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
