import SectionTitle from './SectionTitle.jsx';
import MockupPlaceholder from './MockupPlaceholder.jsx';
import addressImage from '../assets/address.png';
import analyzeImage from '../assets/analyze.png';
import detailImage from '../assets/detailpage.png';
import photoImage from '../assets/photo.png';
import recommendationImage from '../assets/result-2.png';
import reservationImage from '../assets/reservation-2.png';

const steps = [
  ['지역 입력', '오늘 방문할 지역을 입력합니다.', 'Region Input', addressImage],
  ['사진 입력', '오늘의 착장 이미지를 업로드합니다.', 'Camera / Upload', photoImage],
  ['무드 분석', '컬러와 스타일, 분위기 힌트를 추출합니다.', 'Mood Analysis', analyzeImage],
  ['장소 추천', '취향과 목적에 맞는 후보를 보여줍니다.', 'Recommend Result', recommendationImage],
  ['상세 확인', '사진, 리뷰, 분위기 정보를 비교합니다.', 'Place Detail', detailImage],
  ['예약 완료', '방문 일정까지 확정합니다.', 'Booking Complete', reservationImage],
];

export default function MVPFlow() {
  return (
    <section className="section-band section-soft reveal">
      <div className="container">
        <SectionTitle
          eyebrow="MVP Flow"
          title="사진에서 예약까지, 핵심 흐름 검증"
          description="지역 입력, 사진 입력, 무드 분석, 장소 추천, 상세 확인, 예약 완료까지 이어지는 최소 흐름을 설계했습니다."
        />
        <div className="flow-line">
          {steps.map(([title, text, label, image]) => (
            <article className="flow-step" key={title}>
              <MockupPlaceholder label={label} variant="flow-phone" image={image} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
