const insights = [
  {
    title: (
      <>
        정보는 많지만
        <br />
        판단은 어렵다
      </>
    ),
    description: (
      <>
        사진과 리뷰는 많지만
        <br />
        내 착장과 무드에 맞는지는
        <br />
        사용자가 직접 비교해야 한다
      </>
    ),
  },
  {
    title: (
      <>
        장소 선택은
        <br />
        맥락 판단이다
      </>
    ),
    description: (
      <>
        맛, 거리, 별점보다
        <br />
        오늘의 상황과 분위기에
        <br />
        어울리는지가 중요하다
      </>
    ),
  },
  {
    title: (
      <>
        추천은
        <br />
        결정까지 이어져야 한다
      </>
    ),
    description: (
      <>
        후보를 보여주는 것을 넘어
        <br />
        저장, 상세 확인, 예약까지
        <br />
        자연스럽게 연결되어야 한다
      </>
    ),
  },
];

export default function Insight() {
  return (
    <section className="section-band insight-section reveal">
      <div className="container">
        <div className="insight-section__header">
          <p>Insight</p>
          <h2>
            사용자는 더 많은 장소보다,
            <br />
            오늘의 나와 맞는 선택 기준을 원한다
          </h2>
          <p>
            리서치와 페르소나 여정에서 반복된 문제를 바탕으로
            <br />
            맛과멋의 핵심 UX 방향을 정의했습니다.
          </p>
        </div>

        <div className="insight-direction" aria-label="맛과멋 핵심 UX 방향">
          <div className="insight-direction__left">
            <div className="insight-orbit">
              {insights.map((insight, index) => (
                <article className={`insight-circle insight-circle--${index + 1}`} key={index}>
                  <h3>{insight.title}</h3>
                </article>
              ))}
            </div>
            <div className="insight-copy-grid">
              {insights.map((insight, index) => (
                <p key={index}>{insight.description}</p>
              ))}
            </div>
          </div>

          <div className="insight-connector" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="insight-result">
            <p>
              오늘의 나와 맞는
              <br />
              장소를 고르는
              <br />
              가장 쉬운 방법
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
