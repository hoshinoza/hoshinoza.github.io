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
            初音ミクをはじめとする合成音声と共に、ジャンルを横断しながら多彩な世界観を描き出す音楽プロジェクト「星ノ座」。
          </p>
          <p>
            ギリシャ神話が星々に物語を宿したように、音楽という媒体を通して宇宙の断片を編み上げる。
          </p>
          <p>
            楽曲ごとに景色を変えるそのサウンドは、万華鏡のように煌めき、聴く者を未知の銀河へと誘う。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
