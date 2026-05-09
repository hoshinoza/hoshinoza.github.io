import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="artist-image-container">
        <img src={heroImage} alt="Hoshinoza" className="artist-image" />
      </div>
      <h2 className="subtitle">Synthesizer & Multi-genre Music Project</h2>
      <div className="concept">
        <p>星ノ座 (Hoshinoza) は、合成音声と共にジャンルの垣根を超えた多種多様な世界観を構築する音楽プロジェクトです。</p>
      </div>
    </section>
  )
}
