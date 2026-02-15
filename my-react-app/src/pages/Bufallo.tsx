import { useNavigate } from 'react-router-dom';

function Bufallo() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Bufallo Page</h2>
      
      {/* add image here and save them in assets*/}

      <p>Description</p>

      <p>Test you knowledge</p>
      <button onClick={() => navigate('/bufallo/quiz')}> {/* ADD CORRECT PATH*/}
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Bufallo;
