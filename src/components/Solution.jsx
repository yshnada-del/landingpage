import SectionTitle from './SectionTitle.jsx';
import FeatureCard from './FeatureCard.jsx';

const solutions = [
  ['촬영 기반 장소 추천', '오늘의 착장과 분위기를 촬영하면 어울리는 장소를 추천한다.', 'Camera Recommendation'],
  ['무드별 추천', '미니멀, 빈티지, 캐주얼, 데이트 등 분위기에 맞는 장소를 탐색한다.', 'Mood Browse'],
  ['상황별 추천', '데이트, 모임, 혼밥, 카페 등 목적에 맞는 장소를 추천한다.', 'Context Select'],
  ['비슷한 유형 리뷰', '나와 비슷한 취향의 사용자가 남긴 리뷰를 참고할 수 있다.', 'Taste Review'],
];

export default function Solution() {
  return (
    <section className="section-band section-white reveal">
      <div className="container">
        <SectionTitle
          eyebrow="Solution"
          title="사진 한 장에서 장소 추천까지 이어지는 경험"
          description="핵심 기능은 사용자의 이미지, 무드, 상황을 장소 추천의 기준으로 바꾸는 데 집중합니다."
        />
        <div className="solution-grid">
          {solutions.map(([title, description, label]) => (
            <FeatureCard key={title} title={title} description={description} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
