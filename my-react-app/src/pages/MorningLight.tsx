import { useNavigate } from 'react-router-dom';

function MorningLight() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Morning Light Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default MorningLight;