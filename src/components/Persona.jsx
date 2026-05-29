import persona01 from '../assets/persona01.png';
import persona02 from '../assets/persona02.png';
import emoji01 from '../assets/emoji01.png';
import emoji02 from '../assets/emoji02.png';
import emoji03 from '../assets/emoji03.png';
import emoji04 from '../assets/emoji04.png';
import emoji05 from '../assets/emoji05.png';
import emoji06 from '../assets/emoji06.png';

const journeyEmojis = [emoji01, emoji02, emoji03, emoji04, emoji05, emoji06];

const personaMaps = [
  {
    type: 'TYPE A. 무드와 스타일을 중시하는 감성 탐색형',
    image: persona01,
    quote: '오늘 입은 옷이랑 어울리는 분위기의 장소를 찾고 싶어요.',
    name: '김지수',
    age: '25',
    role: '취업준비생',
    situation: [
      '외출을 하나의 콘텐츠처럼 즐기며, 장소를 고를 때도 분위기와 스타일을 중요하게 생각한다. 사진과 공간의 감성이 오늘의 착장과 자연스럽게 이어지길 원한다. 새로운 카페나 맛집을 찾는 과정 자체를 즐기지만, 원하는 분위기의 장소를 찾기 위해 ',
      { text: '여러 이미지를 직접 비교해야 할 때가 많다.', highlight: true },
    ],
    needs: [
      '오늘의 착장과 무드에 어울리는 장소를 빠르게 추천받고 싶어요.',
      '사진을 찍었을 때 분위기가 잘 살아나는 공간을 찾고 싶어요.',
    ],
    points: [82, 55, 76, 42, 30, 38],
    labels: [
      '약속 전 오늘 스타일에 맞는 곳을 찾고 싶다',
      '사진과 분위기를 먼저 본다',
      '마음에 드는 곳을 몇 개 저장한다',
      '비슷한 분위기 장소가 많아 고민된다',
      '추천 이유가 없어 비교가 어렵다',
      '결국 감으로 장소를 결정한다',
    ],
    painPoints: [3, 4],
  },
  {
    type: 'TYPE B. 정보와 실용성을 중시하는 합리적 비교형',
    image: persona02,
    quote: '분위기도 중요하지만, 실패하지 않을 장소를 고르고 싶어요.',
    name: '박지원',
    age: '27',
    role: '취업준비생',
    situation: [
      '외출을 즐기지만 감성보다 실제 만족할 수 있는 장소인지 먼저 확인한다. 새로운 장소를 찾을 때는 맛, 가격, 위치, 리뷰 같은 정보를 함께 비교하며 무난하고 실패 없는 선택을 중요하게 여긴다. 분위기만 좋은 추천보다는 ',
      { text: '왜 이 장소가 추천되었는지 이해할 수 있는 정보', highlight: true },
      '가 필요하다.',
    ],
    needs: [
      '리뷰, 가격, 위치를 함께 확인할 수 있는 추천을 받고 싶어요.',
      '추천 이유를 이해하고 비교하며 결정하고 싶어요.',
    ],
    points: [48, 84, 72, 34, 26, 58],
    labels: [
      '약속이 생겨 장소를 찾아본다',
      '리뷰와 평점을 먼저 확인한다',
      '후보 장소를 여러 개 비교한다',
      '분위기만 보고는 결정하기 어렵다',
      '정보가 부족하면 추천을 믿기 어렵다',
      '조건에 맞는 곳으로 결정한다',
    ],
    painPoints: [3, 4],
  },
];

function JourneyMap({ points, labels, painPoints }) {
  const coordinates = points.map((point, index) => ({
    x: 8 + index * 16.8,
    y: 100 - point,
  }));
  const path = coordinates.map(({ x, y }, index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');

  return (
    <div className="persona-journey" aria-label="journey map">
      <div className="persona-journey__scale" aria-hidden="true">
        <span>GOOD</span>
        <span>BAD</span>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="persona-journey__area" d={`${path} L 92 96 L 8 96 Z`} />
        <path className="persona-journey__line" d={path} />
      </svg>
      <div className="persona-journey__points">
        {coordinates.map(({ x, y }, index) => (
          <span
            className={`persona-journey__point ${painPoints.includes(index) ? 'is-pain' : ''}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            key={`${x}-${y}`}
          >
            <img src={journeyEmojis[index]} alt="" />
            {painPoints.includes(index) && <b>pain point</b>}
          </span>
        ))}
      </div>
      <ol className="persona-journey__labels">
        {labels.map((label, index) => (
          <li key={label}>
            <span>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
    </div>
  );
}

function HighlightText({ segments }) {
  return segments.map((segment) => {
    if (typeof segment === 'string') {
      return segment;
    }

    return (
      <mark className="persona-highlight" key={segment.text}>
        {segment.text}
      </mark>
    );
  });
}

export default function Persona() {
  return (
    <section className="section-band section-charcoal persona-section reveal">
      <div className="container">
        <div className="persona-section__intro">
          <p className="eyebrow">PERSONA & JOURNEY MAP</p>
          <h2>리서치 내용을 바탕으로 사용자 유형을 정의했습니다.</h2>
        </div>

        <div className="persona-map-grid">
          {personaMaps.map((persona) => (
            <article className="persona-map-card" key={persona.type}>
              <div className="persona-map-card__top">
                <img src={persona.image} alt="" />
                <div className="persona-map-card__summary">
                  <p className="persona-map-card__type">{persona.type}</p>
                  <p className="persona-map-card__quote">{persona.quote}</p>
                  <div className="persona-map-card__profile">
                    <strong>{persona.name}</strong>
                    <span>({persona.age})</span>
                    <i />
                    <span>{persona.role}</span>
                  </div>
                </div>
              </div>

              <div className="persona-map-card__body">
                <div className="persona-map-card__label">situation</div>
                <p>
                  <HighlightText segments={persona.situation} />
                </p>
              </div>

              <div className="persona-map-card__needs">
                <div className="persona-map-card__label">needs</div>
                <ul>
                  {persona.needs.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              </div>

              <JourneyMap
                points={persona.points}
                labels={persona.labels}
                painPoints={persona.painPoints}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
