import { Camera, MapPin, Sparkles } from 'lucide-react';
import MockupPlaceholder from './MockupPlaceholder.jsx';

const tags = ['Style Recommendation', 'Mood Curation', 'Place Discovery', 'Mobile App'];

export default function Hero() {
  return (
    <section className="hero section-band reveal">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">MOBILE APP CASE STUDY</p>
          <h1>맛과멋</h1>
          <p className="hero__lead">
            오늘의 착장과 분위기에 어울리는 장소를 추천하는 스타일 기반 장소 큐레이션 앱
          </p>
          <div className="tag-row">
            {tags.map((tag) => (
              <span className="chip" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="맛과멋 앱 목업">
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <MockupPlaceholder label="Onboarding / Style Scan" variant="hero-phone" screen="onboarding" />
          <div className="floating-card floating-card--left">
            <Camera size={18} />
            <span>Outfit Scan</span>
          </div>
          <div className="floating-card floating-card--right">
            <MapPin size={18} />
            <span>Mood Place</span>
          </div>
          <div className="floating-card floating-card--bottom">
            <Sparkles size={18} />
            <span>Curated Match</span>
          </div>
        </div>
      </div>
    </section>
  );
}
