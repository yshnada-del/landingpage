import SectionTitle from './SectionTitle.jsx';
import MockupPlaceholder from './MockupPlaceholder.jsx';

const features = [
  ['Feature', '오늘의 스타일로 장소 추천받기', '촬영 또는 업로드한 이미지에서 스타일과 무드를 읽고, 어울리는 장소를 우선 추천합니다.', 'Style Match Home', 'camera', 'result'],
  ['Feature', '무드별로 감도 있는 공간 탐색하기', '미니멀, 빈티지, 캐주얼, 데이트 등 분위기 기준으로 탐색 흐름을 재구성합니다.', 'Mood Collection', 'mood', 'address'],
  ['Feature', '비슷한 취향의 리뷰 확인하기', '별점보다 취향의 유사성을 앞세워 장소 선택의 확신을 높입니다.', 'Similar Taste Review', 'review', 'detail'],
  ['Feature', '장소 상세에서 저장과 예약까지 이어가기', '장소 정보 확인 후 저장, 공유, 예약으로 자연스럽게 이어집니다.', 'Place Detail Booking', 'detail', 'reservation'],
];

export default function KeyFeatures() {
  return (
    <section className="section-band section-charcoal reveal">
      <div className="container">
        <SectionTitle eyebrow="Key Features" title="실제 앱 화면의 리듬으로 기능을 보여준다" tone="dark" />
        <div className="key-feature-stack">
          {features.map(([eyebrow, title, text, label, mainScreen, sideScreen], index) => (
            <article className={`key-feature ${index % 2 ? 'key-feature--reverse' : ''}`} key={title}>
              <div className="key-feature__mockups">
                <MockupPlaceholder label={label} variant="large-phone" screen={mainScreen} />
                <MockupPlaceholder label={`${label} Detail`} variant="side-phone" screen={sideScreen} />
              </div>
              <div className="key-feature__copy">
                <span>{eyebrow}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
