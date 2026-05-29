import SectionTitle from './SectionTitle.jsx';
import MockupPlaceholder from './MockupPlaceholder.jsx';
import moodImage from '../assets/mood.png';
import pageImage from '../assets/page.png';
import photoImage from '../assets/photo-2.png';
import recommendationImage from '../assets/result-2.png';
import reviewImage from '../assets/reviewpage-2.png';
import detailImage from '../assets/detailpage-2.png';
import placeDetailImage from '../assets/detailpage.png';
import reservationImage from '../assets/reservation-2.png';

const features = [
  ['Feature', '오늘의 스타일로 장소 추천', '촬영 또는 업로드한 이미지에서 스타일과 무드를 읽고, 어울리는 장소를 우선 추천합니다.', 'Style Match Home', null, null, photoImage, recommendationImage],
  ['Feature', '무드별 공간 탐색', '미니멀, 빈티지, 캐주얼, 데이트 등 분위기 기준으로 탐색 흐름을 재구성합니다.', 'Mood Collection', null, null, moodImage, pageImage],
  ['Feature', '취향 기반 리뷰 확인', '별점보다 취향의 유사성을 앞세워 장소 선택의 확신을 높입니다.', 'Similar Taste Review', null, null, reviewImage, detailImage],
  ['Feature', '상세에서 예약까지', '장소 정보 확인 후 저장, 공유, 예약으로 자연스럽게 이어집니다.', 'Place Detail Booking', null, null, placeDetailImage, reservationImage],
];

export default function KeyFeatures() {
  return (
    <section className="section-band section-charcoal reveal">
      <div className="container">
        <SectionTitle eyebrow="Key Features" title="실제 앱 화면의 리듬으로 기능을 보여준다" tone="dark" />
        <div className="key-feature-stack">
          {features.map(([eyebrow, title, text, label, mainScreen, sideScreen, mainImage, sideImage], index) => (
            <article className={`key-feature ${index % 2 ? 'key-feature--reverse' : ''}`} key={title}>
              <div className="key-feature__mockups">
                <MockupPlaceholder label={label} variant="large-phone" screen={mainScreen} image={mainImage} />
                <MockupPlaceholder label={`${label} Detail`} variant="side-phone" screen={sideScreen} image={sideImage} />
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
