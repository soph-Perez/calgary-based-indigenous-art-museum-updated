import { useNavigate } from 'react-router-dom';

function Healing() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Healing Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Healing;