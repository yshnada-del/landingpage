import heroPhoneMockup from '../assets/hero-phone-mockup.png';
import heroPhoneMockupRight from '../assets/hero-phone-mockup-right.png';
import heroTextLogo from '../assets/hero-text-logo.svg';

export default function Hero() {
  return (
    <section className="hero section-band reveal">
      <div className="container hero__inner">
        <div className="hero__topline" aria-label="맛과멋 프로젝트 정보">
          <div className="hero__meta-block">
            <strong>맛과멋</strong>
            <span>Style Based Place Curation App.</span>
          </div>
          <div className="hero__meta-block">
            <strong>Mobile APP - UX/UI Design</strong>
            <span>Personal Project</span>
          </div>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">
              <span>맛과멋</span>
              <img src={heroTextLogo} alt="" aria-hidden="true" />
            </h1>
            <p className="hero__lead">
              오늘의 착장과 분위기에 어울리는 장소를 추천하는<br />
              스타일 기반 장소 큐레이션 앱
            </p>
          </div>
          <div className="hero__visual" aria-label="맛과멋 앱 목업">
            <img className="hero__phone-image hero__phone-image--left" src={heroPhoneMockup} alt="맛과멋 스타일 분석 화면이 담긴 아이폰 목업" />
            <img className="hero__phone-image hero__phone-image--right" src={heroPhoneMockupRight} alt="맛과멋 로고 화면이 담긴 아이폰 목업" />
          </div>
        </div>
      </div>
    </section>
  );
}
