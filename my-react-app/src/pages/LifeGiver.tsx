import { useNavigate } from 'react-router-dom';

function LifeGiver() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Life Giver Page</h2>
      
      {/* add image here and save them in assets*/}

      <p>Description</p>

      <p>Test you knowledge</p>
      <button onClick={() => navigate('/bufallo/quiz')}>
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default LifeGiver;
