import { useNavigate } from 'react-router-dom';

function Mohkins() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Mohkins Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Mohkins;
