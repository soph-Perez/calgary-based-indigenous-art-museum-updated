import { useNavigate } from 'react-router-dom';

function Healing() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Healing</h2>

      <p>“Healing” is a contemporary Indigenous artwork by Ashley Crowchief, a Blackfoot artist from Alberta who uses visual art to explore identity, culture, and emotional growth. After previously working in film and event production, Ashley shifted her focus toward building her own artistic practice and creative business.
The piece “Healing” reflects the emotional, spiritual, and cultural elements that contribute to a whole person’s well-being. Rather than depicting a single event or landscape, the artwork focuses on internal healing, self-expression, and reconnection with heritage. Ashley often describes art as a safe and comforting space, allowing individuals to process experiences and celebrate their identity without fear of judgment.
Beyond personal expression, the artwork also carries a broader message of cultural empowerment and encouragement for future generations. Ashley hopes to inspire more Indigenous artists to share their voices publicly and contribute to a growing presence of Indigenous creativity within urban spaces such as Calgary. Through “Healing,” the artist emphasizes pride in heritage, resilience, and the importance of artistic spaces for both personal and community growth.
</p>

      <p>Test your knowledge</p>
      <button onClick={() => navigate('/healing/quiz')}>
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Healing;