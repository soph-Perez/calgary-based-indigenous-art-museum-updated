import { useNavigate } from 'react-router-dom';

function Grizzly() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Grizzly Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Grizzly;