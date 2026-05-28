import SectionTitle from './SectionTitle.jsx';

const colors = [
  ['App Black', '#050505'],
  ['Primary Green', '#3f6b5e'],
  ['Zinc Surface', '#18181b'],
  ['Tab Bar', '#2c2c2c'],
  ['Text Gray', '#999999'],
  ['Soft Line', '#2f3432'],
];

export default function VisualSystem() {
  return (
    <section className="section-band section-soft reveal">
      <div className="container">
        <SectionTitle eyebrow="Visual System" title="사진 기반 큐레이션을 위한 조용하지만 선명한 시스템" />
        <div className="system-grid">
          <article className="system-panel color-panel">
            <h3>Color Palette</h3>
            <div className="swatches">
              {colors.map(([name, hex]) => (
                <div className="swatch" key={name}>
                  <i style={{ background: hex }} />
                  <span>{name}</span>
                  <small>{hex}</small>
                </div>
              ))}
            </div>
          </article>
          <article className="system-panel type-panel">
            <h3>Typography</h3>
            <strong>맛과멋</strong>
            <p>장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험</p>
            <span>Pretendard / system sans-serif</span>
          </article>
          <article className="system-panel">
            <h3>Button</h3>
            <div className="button-samples">
              <button>추천 받기</button>
              <button className="button-secondary">저장하기</button>
            </div>
          </article>
          <article className="system-panel">
            <h3>Tag / Chip</h3>
            <div className="tag-row">
              {['데이트', '빈티지', '혼밥', '카페', '미니멀'].map((tag) => <span className="chip" key={tag}>{tag}</span>)}
            </div>
          </article>
          <article className="system-panel image-card-panel">
            <h3>Image Card Layout</h3>
            <div className="image-card-grid">
              {['Mood Image', 'Place Card', 'Review Image'].map((label) => (
                <div className="image-card" key={label}>{label}</div>
              ))}
            </div>
          </article>
          <article className="system-panel card-ui-panel">
            <h3>Card UI</h3>
            <div className="sample-place-card">
              <div />
              <strong>Low Light Dining</strong>
              <span>차분한 블랙 착장에 어울리는 와인바</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
