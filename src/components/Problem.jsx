import SectionTitle from './SectionTitle.jsx';

const problems = [
  ['장소 선택 기준이 맛, 거리, 별점에 머문다', '착장과 무드까지 반영한 스타일 기반 추천으로 전환'],
  ['사진은 많지만 내 분위기와 맞는지 판단하기 어렵다', '오늘의 이미지에서 컬러, 무드, 상황 힌트를 분석'],
  ['선택지는 많지만 데이트와 모임 장소 결정은 오래 걸린다', '상황별 후보를 좁혀 저장과 예약까지 이어지는 흐름 제공'],
];

export default function Problem() {
  return (
    <section className="section-band section-soft reveal">
      <div className="container">
        <SectionTitle
          eyebrow="Problem"
          title={
            <>
              장소 추천은 많지만,
              <br />
              오늘의 나와 맞는 곳은 찾기 어렵다
            </>
          }
          description="맛과멋은 장소 선택의 기준을 정보 탐색에서 스타일과 상황에 맞춘 큐레이션으로 옮깁니다."
        />
        <div className="problem-solution-list" aria-label="맛과멋 문제와 해결 방향">
          {problems.map(([problem, solution]) => (
            <article className="problem-solution-row" key={problem}>
              <div className="problem-pill problem-pill--issue">{problem}</div>
              <div className="problem-arrow" aria-hidden="true" />
              <div className="problem-pill problem-pill--solution">{solution}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
