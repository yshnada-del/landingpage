const goals = [
  {
    keyword: '개인화',
    description: (
      <>
        사용자의 착장과 사진 속 분위기를 바탕으로
        <br />
        오늘의 스타일과 무드에 어울리는 장소를
        <br />
        더 빠르게 발견할 수 있어야 한다.
      </>
    ),
    result: (
      <>
        오늘의 나와 어울리는 장소를
        <br />
        추천해주는 서비스
      </>
    ),
  },
  {
    keyword: '신뢰성',
    description: (
      <>
        추천된 장소가 왜 나에게 맞는지 이해할 수 있도록
        <br />
        분위기뿐 아니라 리뷰, 위치, 가격 등
        <br />
        의사결정에 필요한 정보를 함께 제공해야 한다.
      </>
    ),
    result: (
      <>
        추천 이유와 기본 정보를 함께
        <br />
        확인할 수 있는 서비스
      </>
    ),
  },
  {
    keyword: '연결성',
    description: (
      <>
        장소를 추천받는 것에서 끝나는 것이 아니라
        <br />
        비교, 저장, 상세 확인, 예약까지
        <br />
        자연스럽게 이어지는 흐름이 필요하다.
      </>
    ),
    result: (
      <>
        탐색부터 저장·예약까지
        <br />
        결정 흐름을 연결하는 서비스
      </>
    ),
  },
];

export default function ProjectGoal() {
  return (
    <section className="section-band project-goal-section reveal">
      <div className="container">
        <div className="project-goal__header">
          <p>Project Goal</p>
          <h2>
            리서치와 인사이트를 바탕으로
            <br />
            맛과멋이 구현해야 할 핵심 목표를 정의했습니다.
          </h2>
        </div>

        <div className="project-goal__layout">
          <div className="project-goal__symbol" aria-hidden="true">
            <span>PROJECT GOAL</span>
          </div>

          <div className="project-goal__rows">
            {goals.map((goal) => (
              <article className="project-goal-row" key={goal.keyword}>
                <div className="project-goal-row__keyword">{goal.keyword}</div>
                <p className="project-goal-row__description">{goal.description}</p>
                <div className="project-goal-row__result">{goal.result}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
