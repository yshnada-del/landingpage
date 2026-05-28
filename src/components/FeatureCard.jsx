import MockupPlaceholder from './MockupPlaceholder.jsx';

export default function FeatureCard({ index, title, description, label }) {
  return (
    <article className="feature-card reveal">
      <div className="feature-card__copy">
        {index && <span>{index}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <MockupPlaceholder label={label} variant="mini-phone" />
    </article>
  );
}
