import SectionTitle from './SectionTitle.jsx';
import FeatureCard from './FeatureCard.jsx';
import moodImage from '../assets/mood.png';
import pageImage from '../assets/page.png';
import resultImage from '../assets/result-2.png';
import reviewImage from '../assets/reviewpage.png';

const solutions = [
  [
    '촬영 기반 장소 추천',
    '착장 사진을 분석해 어울리는 장소를 제안합니다.',
    'Camera Recommendation',
    resultImage,
  ],
  [
    '무드별 추천',
    '미니멀, 빈티지, 캐주얼 등 원하는 분위기로 장소를 탐색합니다.',
    'Mood Browse',
    moodImage,
  ],
  [
    '상황별 추천',
    '데이트, 모임, 기념일처럼 목적에 맞는 장소를 고릅니다.',
    'Context Select',
    pageImage,
  ],
  [
    '비슷한 유형 리뷰',
    '나와 취향이 비슷한 사용자의 리뷰를 참고합니다.',
    'Taste Review',
    reviewImage,
  ],
];

export default function Solution() {
  return (
    <section className="section-band section-white reveal">
      <div className="container">
        <SectionTitle
          eyebrow="Solution"
          title="사진으로 찾는 나만의 장소"
          description="착장과 무드, 상황을 읽어 사용자에게 어울리는 장소를 추천합니다."
        />
        <div className="solution-grid">
          {solutions.map(([title, description, label, image]) => (
            <FeatureCard key={title} title={title} description={description} label={label} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
