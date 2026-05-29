import { useEffect, useRef, useState } from 'react';

const researchFindings = [
  {
    label: '선택 기준',
    question: '장소를 고를 때 가장 먼저 확인하는 요소는 무엇인가요?',
    percent: 72,
    title: '분위기와 사진을 먼저 확인해요',
    description: [
      '응답자들은 장소를 고를 때 공간의 분위기와',
      '사진이 오늘의 상황과 어울리는지를',
      '먼저 확인하는 경향을 보였습니다.',
    ],
  },
  {
    label: '탐색 불편',
    question: '새로운 장소를 찾을 때 가장 불편한 점은 무엇인가요?',
    percent: 64,
    title: '사진은 많지만 판단은 어려워요',
    description: [
      '리뷰와 이미지는 많지만, 실제로 내 무드와',
      '목적에 맞는 공간인지 판단하기 위해',
      '여러 정보를 직접 비교해야 하는 불편이 있었습니다.',
    ],
  },
  {
    label: '핵심 니즈',
    question: '오늘 입은 옷이나 분위기에 맞는 장소 추천이 필요하다고 느끼나요?',
    percent: 81,
    title: '오늘의 스타일에 맞는 추천이 필요해요',
    description: [
      '응답자들은 단순히 가까운 장소보다,',
      '오늘의 착장과 무드에 어울리는 장소를',
      '빠르게 추천받는 경험에 긍정적인 반응을 보였습니다.',
    ],
  },
  {
    label: '결정 정보',
    question: '추천받은 장소를 선택하기 전 가장 확인하고 싶은 정보는 무엇인가요?',
    percent: 68,
    title: '추천 이유와 기본 정보를 함께 보고 싶어요',
    description: [
      '추천받은 장소를 선택하기 전에는',
      '리뷰, 위치, 가격, 예약 가능 여부 등',
      '실제 방문에 필요한 정보도 함께 확인하고 싶어했습니다.',
    ],
  },
];

function Gauge({ percent, label }) {
  return (
    <div
      className="research-finding-card__gauge"
      style={{ '--gauge-value': percent }}
      aria-label={`${label} ${percent}%`}
    >
      <svg viewBox="0 0 160 160" role="img" aria-hidden="true">
        <circle
          className="research-finding-card__track"
          cx="80"
          cy="80"
          r="62"
          pathLength="100"
        />
        <circle
          className="research-finding-card__progress"
          cx="80"
          cy="80"
          r="62"
          pathLength="100"
        />
      </svg>
      <strong>{percent}%</strong>
    </div>
  );
}

export default function ResearchFinding() {
  const sectionRef = useRef(null);
  const [isGaugeActive, setIsGaugeActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGaugeActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-band section-charcoal research-finding reveal" ref={sectionRef}>
      <div className="container">
        <div className="research-finding__intro">
          <p className="eyebrow">user research</p>
          <h2>반복되는 사용자 니즈를 발견하다</h2>
          <p>장소 선택 과정에서 나타난 주요 응답 경향</p>
        </div>

        <div className="research-finding__grid" aria-label="사용자 리서치 발견점">
          {researchFindings.map(({ label, question, percent, title, description }, index) => (
            <article
              className={`research-finding-card lift-card ${isGaugeActive ? 'is-gauge-active' : ''}`}
              key={label}
              style={{ '--card-index': index }}
            >
              <p className="research-finding-card__question">{question}</p>
              <Gauge percent={percent} label={label} />
              <h3>{title}</h3>
              <p>
                {description.map((line) => (
                  <span className="research-finding-card__line" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
