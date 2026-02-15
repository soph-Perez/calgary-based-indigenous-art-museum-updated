import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Indigenous Digital Art Gallery</h1>
      <p>
  Welcome to the Indigenous Digital Art Gallery — a curated collection of contemporary works that celebrate Indigenous identity, culture, storytelling, and connection to land. Each piece in this gallery reflects themes of resilience, tradition, intergenerational knowledge, healing, and the enduring strength of Indigenous communities. Explore the artworks below to learn about their meaning, symbolism, and cultural significance.
</p>

     
      <button onClick={() => navigate('/lifegiver')}>
        Life Giver
      </button>

      <button onClick={() => navigate('/elderstories')}>
        The Stories from My Elders Lift Me Up
      </button>

      <button onClick={() => navigate('/mohkins')}>
        Moh'kins'tsis Project
      </button>

      <button onClick={() => navigate('/healing')}>
        Healing
      </button>

      <button onClick={() => navigate('/morninglight')}>
        Morning Light
      </button>

      <button onClick={() => navigate('/bufallo')}>
        Bufallo Nations Stand and Be Noticed
      </button>

      <button onClick={() => navigate('/grizzly')}>
        Grizzly
      </button>

      <button onClick={() => navigate('/cochrane')}>
        Cochrane Bricolage
      </button>

      <button onClick={() => navigate('/sources')}>
        Sources
      </button>
    </div>
  );
}

export default HomePage;