export default function SectionTitle({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  return (
    <div className={`section-title section-title--${align} section-title--${tone}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
