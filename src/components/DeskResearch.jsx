const findings = [
  [
    '01',
    '정보 과잉',
    '플랫폼은 많아졌지만 사용자는 여전히 여러 앱을 오가며 장소 정보를 비교합니다.',
  ],
  [
    '02',
    '분위기 판단의 어려움',
    '사진과 리뷰는 많지만, 오늘의 스타일과 어울리는 공간인지는 사용자가 직접 판단해야 합니다.',
  ],
  [
    '03',
    '추천 기준의 한계',
    '기존 장소 추천은 맛, 거리, 별점 중심으로 구성되어 취향과 무드 기반 추천이 부족합니다.',
  ],
  [
    '04',
    '결정 피로',
    '상황에 맞는 장소를 고르는 과정에서 후보는 많아지지만 결정은 더 늦어집니다.',
  ],
];

export default function DeskResearch() {
  return (
    <section className="section-band section-charcoal desk-research reveal">
      <div className="container">
        <div className="desk-research__intro">
          <p className="eyebrow">Desk Research</p>
          <h2>
            정보는 많아졌지만,
            <br />
            장소 선택은 여전히 어렵다
          </h2>
          <div className="desk-research__description">
            <p>
              맛집 정보와 장소 추천 플랫폼은 많아졌지만, 사용자는 여전히 여러 앱을 오가며 리뷰와 사진을
              비교합니다.
            </p>
            <p>
              기존 추천은 맛, 거리, 별점 중심에 머물러 있어 오늘의 착장과 분위기에 맞는 장소를 찾기에는
              한계가 있습니다.
            </p>
          </div>
        </div>

        <div className="research-card-grid" aria-label="데스크 리서치 핵심 발견">
          {findings.map(([number, title, description]) => (
            <article className="research-card lift-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
