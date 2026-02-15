import { useNavigate } from 'react-router-dom';
import LifeGiver from "../assets/LifeGiver.webp";
import ElderStories from "../assets/TheStoriesFromMyEldersLiftMeUp.webp";
import Mohkins from "../assets/mohkins.webp";
import Healing from "../assets/Healing.webp";
import Morninglight from "../assets/MorningLight.webp";
import Bufallo from "../assets/BuffaloNationsStandAndBeNoticed.webp";
import Grizzly from "../assets/Grizzly.webp";
import Cochrane from "../assets/Cochrane.webp";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="page-title">Indigenous Digital Art Gallery</h1>
      <p className="page-description">Welcome to the Indigenous Digital Art Gallery — a curated collection of contemporary works that celebrate Indigenous identity, culture, storytelling, and connection to land. Each piece in this gallery reflects themes of resilience, tradition, intergenerational knowledge, healing, and the enduring strength of Indigenous communities. Explore the artworks below to learn about their meaning, symbolism, and cultural significance.</p>

      <div className="gallery-grid">
        <img src={LifeGiver} alt="Life Giver" onClick={() => navigate("/lifegiver")} />
        <img src={ElderStories} alt="Elder Stories" onClick={() => navigate("/elderstories")} />
        <img src={Mohkins} alt="Mohkins" onClick={() => navigate("/mohkins")} />
        <img src={Healing} alt="Healing" onClick={() => navigate("/healing")} />
        <img src={Morninglight} alt="Morning Light" onClick={() => navigate("/morninglight")} />
        <img src={Bufallo} alt="Bufallo" onClick={() => navigate("/bufallo")} />
        <img src={Grizzly} alt="Grizzly" onClick={() => navigate("/grizzly")} />
        <img src={Cochrane} alt="Cochrane Bricolage" onClick={() => navigate("/cochrane")} />
      </div>

      <div className="test-buttons" style={{ marginTop: '1rem' }}>
        <p className="sources-button" onClick={() => navigate('/sources')}>Sources</p>
      </div>
    </div>
  );
}

export default HomePage;