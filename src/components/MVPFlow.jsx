import SectionTitle from './SectionTitle.jsx';
import MockupPlaceholder from './MockupPlaceholder.jsx';

const steps = [
  ['촬영 / 업로드', '오늘의 착장 이미지를 입력한다.', 'Camera / Upload'],
  ['스타일·무드 분석', '컬러, 무드, 상황 힌트를 추출한다.', 'Mood Analysis'],
  ['장소 추천', '스타일과 목적에 맞는 후보를 제안한다.', 'Recommend Result'],
  ['장소 상세 확인', '사진, 리뷰, 분위기 정보를 확인한다.', 'Place Detail'],
  ['저장 또는 예약', '마음에 드는 장소를 저장하거나 예약한다.', 'Saved / Booking'],
];

export default function MVPFlow() {
  return (
    <section className="section-band section-soft reveal">
      <div className="container">
        <SectionTitle
          eyebrow="MVP Flow"
          title="가장 짧은 경로로 추천의 가치를 검증한다"
          description="MVP는 사용자가 사진을 기반으로 장소를 추천받고, 상세 정보를 확인한 뒤 저장하거나 예약하는 핵심 흐름을 중심으로 설계했습니다."
        />
        <div className="flow-line">
          {steps.map(([title, text, label]) => (
            <article className="flow-step" key={title}>
              <MockupPlaceholder label={label} variant="flow-phone" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
