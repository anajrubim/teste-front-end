import './SectionHeading.scss';

interface Props { id: string; title: string; seeAll?: boolean; }

export function SectionHeading({ id, title, seeAll = false }: Props) {
  return (
    <header className="section-heading">
      <div className="section-heading__row">
        <span className="section-heading__line" aria-hidden="true" />
        <h2 id={id} className="section-heading__title">{title}</h2>
        <span className="section-heading__line" aria-hidden="true" />
      </div>
      {seeAll && <a className="section-heading__all" href="#">Ver todos</a>}
    </header>
  );
}
