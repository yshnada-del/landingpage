import analyzing from '../assets/Analyzing.png';
import home from '../assets/Home.png';
import photoCapture from '../assets/PhotoCapture.png';
import photoCaptureAlt from '../assets/PhotoCapture-1.png';
import placeDetail from '../assets/PlaceDetail.png';
import regionSelect from '../assets/RegionSelect.png';
import reservation from '../assets/Reservation.png';
import reservationComplete from '../assets/ReservationComplete.png';
import result from '../assets/Result.png';
import resultAlt from '../assets/Result-1.png';

const screens = [
  home,
  photoCapture,
  analyzing,
  placeDetail,
  result,
  reservation,
  photoCaptureAlt,
  regionSelect,
  resultAlt,
  reservationComplete,
  home,
  placeDetail,
];

const frames = [
  [1122.64, 223.414, 1129.48, 243],
  [1484.64, 243.414, 1491.48, 263],
  [1843.64, 287.414, 1850.48, 307],
  [2196.64, 355.414, 2203.48, 374.999],
  [817.173, 769.009, 824.02, 788.595],
  [1179.17, 789.009, 1186.02, 808.595],
  [1538.17, 833.009, 1545.02, 852.595],
  [1891.17, 901.009, 1898.02, 920.595],
  [511.173, 1312.414, 518.02, 1332],
  [873.173, 1332.414, 880.02, 1352],
  [1232.17, 1376.414, 1239.02, 1396],
  [1585.17, 1444.414, 1592.02, 1464],
];

function WireframeMockup() {
  return (
    <svg className="wireframe-mockup" viewBox="0 0 2722 2374" fill="none" xmlns="http://www.w3.org/2000/svg">
      {frames.map(([phoneX, phoneY, imageX, imageY], index) => (
        <g className="wireframe-phone" key={`${phoneX}-${phoneY}`}>
          <rect
            x={phoneX}
            y={phoneY}
            width="300"
            height="606.178"
            rx="32"
            transform={`rotate(29.42 ${phoneX} ${phoneY})`}
            fill="#050505"
          />
          <image
            href={screens[index]}
            x={imageX}
            y={imageY}
            width="267.813"
            height="579.905"
            preserveAspectRatio="none"
            transform={`rotate(29.42 ${imageX} ${imageY})`}
          />
        </g>
      ))}
    </svg>
  );
}

export default function Wireframe() {
  return (
    <section className="wireframe-section reveal">
      <div className="wireframe-collage" aria-hidden="true">
        <WireframeMockup />
      </div>

      <div className="wireframe-overlay" aria-hidden="true" />

      <div className="container wireframe-content">
        <div className="wireframe-copy">
          <p className="wireframe-eyebrow">Wireframe</p>
          <p>착장 촬영부터 AI 분석, 장소 탐색과 예약까지 자연스럽게 이어지는 사용자 흐름을 설계했습니다.</p>
        </div>
      </div>
    </section>
  );
}
