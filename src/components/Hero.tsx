import React from 'react';
import artistImage from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="artist-image-container">
        <img src={artistImage} alt="星ノ座 Artist" className="artist-image" />
      </div>
      <div className="glass-card">
        <h1>星ノ座</h1>
        <p className="subtitle">Hoshinoza - Vocaloid Producer</p>
        <div className="concept">
          <p>
            <span>初音ミクをはじめとする合成音声と共に、</span>
            <span>ジャンルを横断しながら</span>
            <span>多彩な世界観を描き出す</span>
            <span>音楽プロジェクト「星ノ座」。</span>
          </p>
          <p>
            <span>ギリシャ神話が星々に物語を宿したように、</span>
            <span>音楽という媒体を通して</span>
            <span>宇宙の断片を編み上げる。</span>
          </p>
          <p>
            <span>楽曲ごとに景色を変えるそのサウンドは、</span>
            <span>万華鏡のように煌めき、</span>
            <span>聴く者を未知の銀河へと誘う。</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
