import { useNavigate } from 'react-router-dom';

function Cochrane() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cochrane Info Page</h2>
      <p>Extra Info content goes here.</p>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Cochrane;
