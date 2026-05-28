import SectionTitle from './SectionTitle.jsx';
import MockupPlaceholder from './MockupPlaceholder.jsx';

const screens = [
  ['Home', 'onboarding'],
  ['Camera / Upload', 'camera'],
  ['Recommend Result', 'result'],
  ['Mood List', 'mood'],
  ['Place Detail', 'detail'],
  ['Review', 'review'],
  ['Saved Place', 'saved'],
  ['Reservation Complete', 'reservation'],
];

export default function UIShowcase() {
  return (
    <section className="section-band section-white showcase reveal">
      <div className="container">
        <SectionTitle
          eyebrow="Final UI"
          title="주요 화면을 전시형 그리드로 구성"
          description="Figma에서 확인한 블랙 UI, primary 버튼, 카메라 플로우, 하단 탭 구조를 반영한 교체형 목업입니다."
        />
      </div>
      <div className="showcase-strip">
        <div className="container showcase-grid">
          {screens.map(([screen, type], index) => (
            <MockupPlaceholder key={screen} label={screen} screen={type} variant={index % 3 === 0 ? 'showcase-phone tall' : 'showcase-phone'} />
          ))}
        </div>
      </div>
    </section>
  );
}
