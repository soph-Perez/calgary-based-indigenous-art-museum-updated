import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>plz add project title</h1>
      <p>
        Add Info Here
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