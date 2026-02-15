import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Add Info Here
      </p>
      <button onClick={() => navigate('/lifegiver')}>
        LifeGiver
      </button>

      <button onClick={() => navigate('/elderstories')}>
        ElderStories
      </button>

      <button onClick={() => navigate('/mohkins')}>
        Mohkins
      </button>

      <button onClick={() => navigate('/healing')}>
        Healing
      </button>

      <button onClick={() => navigate('/morninglight')}>
        MorningLight
      </button>

      <button onClick={() => navigate('/bufallo')}>
        Bufallo
      </button>

      <button onClick={() => navigate('/grizzly')}>
        Grizzly
      </button>

      <button onClick={() => navigate('/cochrane')}>
        Cochrane
      </button>
    </div>
  );
}

export default HomePage;
