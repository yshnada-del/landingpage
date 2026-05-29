const paletteColors = [
  ['Main Color', '#3F6B5E'],
  ['Point Color', '#FFFFFF'],
  ['Sub Color', '#BCBCBC'],
  ['Sub Color', '#000000'],
  ['Surface Color', '#18181B'],
  ['Surface Color', '#27272A'],
];

const fontColors = [
  ['Main Font', '#FFFFFF'],
  ['Base Font', '#000000'],
  ['Muted Font', '#999999'],
  ['Sub Font', '#52525C'],
  ['Caption Font', '#71717B'],
];

const typeScale = [
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Bold', '30px', '120%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Semibold', '24px', '140%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Semibold', '20px', '140%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Medium', '18px', '140%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Regular', '16px', '140%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Regular', '14px', '140%', '-2%'],
  ['장소 추천을 스타일 큐레이션으로 바꾸는 모바일 경험', 'Regular', '12px', '140%', '-2%'],
];

const lightSwatches = new Set(['#FFFFFF', '#BCBCBC', '#999999', '#71717B']);

export default function VisualSystem() {
  return (
    <section className="visual-system reveal">
      <div className="container visual-system__inner">
        <header className="visual-system__header">
          <p>Visual System</p>
          <h2>일관된 무드로 이어지는 디자인 시스템</h2>
        </header>

        <div className="visual-system__stack">
          <section className="design-block typography-card">
            <h3>Typography</h3>
            <div className="type-hero">
              <strong>맛과멋</strong>
              <span>Pretendard / System Sans-Serif</span>
            </div>

            <div className="type-table type-samples" aria-label="Typography scale">
              {typeScale.map(([name, weight, size, lineHeight, letterSpacing]) => (
                <div className="type-row" key={`${size}-${weight}`}>
                  <strong
                    style={{
                      fontSize: size,
                      fontWeight: weight === 'Bold' ? 700 : weight === 'Semibold' ? 600 : weight === 'Medium' ? 500 : 400,
                      lineHeight,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {name}
                  </strong>
                  <span>{weight}</span>
                  <span>{size}</span>
                  <span>{lineHeight}</span>
                  <span>{letterSpacing}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="design-block palette-card">
            <h3>Color</h3>
            <section>
              <h4>Main / Point / Sub Color</h4>
              <div className="system-swatches system-swatches--palette">
                {paletteColors.map(([name, hex]) => (
                  <div className={`system-swatch ${lightSwatches.has(hex) ? 'is-light' : ''}`} style={{ background: hex }} key={`${name}-${hex}`}>
                    <strong>{name}</strong>
                    <span>{hex}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4>Font Color</h4>
              <div className="system-swatches system-swatches--font">
                {fontColors.map(([name, hex]) => (
                  <div className={`system-swatch ${lightSwatches.has(hex) ? 'is-light' : ''}`} style={{ background: hex }} key={`${name}-${hex}`}>
                    <strong>{name}</strong>
                    <span>{hex}</span>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
