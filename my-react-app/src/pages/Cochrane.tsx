import { useNavigate } from 'react-router-dom';

function Cochrane() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cochrane Bricolage</h2>
      
      {/* add image here and save them in assets*/}

      <p>Cochrane Bricolage by Karen Ho Fatt is a vibrant six-sided mosaic sculpture made from more than 23,000 glass tiles mounted on a steel structure. Each facet is designed to echo the mountains that shape Cochrane’s horizon, while telling different parts of the town’s story — from its ranching and farming heritage to its modern growth and high-tech future. The artwork presents Cochrane as a place where the past, present, and future collide, showing contrasts like small-town roots with an energetic, evolving identity.
Ho Fatt created the piece using her own colour drawings and assembled 1" x 1" tiles that she carefully cut and arranged. A key technique used is optical mixing, where multiple values of the same colour (for example, several shades of green) are placed together to create visual depth and guide the viewer’s eye through the scenes. Pearlescent tiles add a luminous quality that draws attention to details and encourages closer viewing.
The sculpture’s collage of imagery includes recognizable elements such as a train, the winding Bow River, spectacular sunsets, and sunny and moonlit skies, along with references to Cochrane’s family life, culture, business, parks, flora and fauna, industry, recreation, and history. The artwork measures 7’6” high × 5’6” wide × 4 feet deep, and the artist describes it as a milestone piece, emphasizing that mosaics are meaningful to her because they are built to last.
</p>

      <p>Test your knowledge</p>
      <button onClick={() => navigate('/cochrane/quiz')}> {/* ADD CORRECT PATH*/}
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Cochrane;
