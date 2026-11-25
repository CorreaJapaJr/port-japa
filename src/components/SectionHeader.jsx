export default function SectionHeader({ id, number, eyebrow, title, description }) {
  return (
    <header className='section-header'>
      <p className='eyebrow'>
        <span className='eyebrow-number'>{number}</span>
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {description && <p className='section-lead'>{description}</p>}
    </header>
  )
}
