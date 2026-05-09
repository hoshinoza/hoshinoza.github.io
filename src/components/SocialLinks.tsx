export default function SocialLinks() {
  return (
    <section className="social-links glass-card">
      <h2>Links</h2>
      <div className="links" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
        <a href="https://twitter.com/hoshinoza" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24"><use href="/icons.svg#x-icon" /></svg> X (Twitter)
        </a>
        <a href="https://bsky.app/profile/hoshinoza" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24"><use href="/icons.svg#bluesky-icon" /></svg> Bluesky
        </a>
        <a href="https://youtube.com/c/hoshinoza" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24"><use href="/icons.svg#social-icon" /></svg> YouTube
        </a>
      </div>
    </section>
  )
}
