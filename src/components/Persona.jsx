import { Heart, Users } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';

const personas = [
  {
    icon: Heart,
    title: '무드 중심 탐색형 사용자',
    traits: ['감도 있는 장소를 찾고 싶어함', '착장과 분위기에 어울리는 공간을 중요하게 생각함', 'SNS 이미지와 리뷰 기반 탐색에 익숙함'],
  },
  {
    icon: Users,
    title: '상황 중심 추천형 사용자',
    traits: ['데이트, 약속, 모임 등 목적에 맞는 장소가 필요함', '많은 선택지보다 실패 없는 추천을 선호함', '빠르게 결정할 수 있는 큐레이션을 원함'],
  },
];

export default function Persona() {
  return (
    <section className="section-band section-charcoal reveal">
      <div className="container">
        <SectionTitle
          eyebrow="Target User"
          title="사용자는 더 많은 목록보다 더 정확한 맥락을 원한다"
          tone="dark"
        />
        <div className="persona-grid">
          {personas.map(({ icon: Icon, title, traits }, index) => (
            <article className="persona-card lift-card" key={title}>
              <div className="persona-card__head">
                <Icon size={24} />
                <span>Persona 0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <ul>
                {traits.map((trait) => <li key={trait}>{trait}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
