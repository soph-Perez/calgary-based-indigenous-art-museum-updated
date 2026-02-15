import { useNavigate } from 'react-router-dom';

function ElderStories() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Elder Stories Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default ElderStories;
