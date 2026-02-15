import { useNavigate } from 'react-router-dom';
import CochraneImg from "../assets/Cochrane.webp";

function Cochrane() {
  const navigate = useNavigate();

  return (
    <div className="art-page">
      <h1 className="art-title">Cochrane Bricolage</h1>
      <img className="art-image" src={CochraneImg} alt="Cochrane Bricolage" />

      <div className="art-description">
        <h3>Description</h3>
        <p>Cochrane Bricolage by Karen Ho Fatt is a vibrant six-sided mosaic sculpture made from more than 23,000 glass tiles mounted on a steel structure. Each facet is designed to echo the mountains that shape Cochrane’s horizon, while telling different parts of the town’s story — from its ranching and farming heritage to its modern growth and high-tech future. The artwork presents Cochrane as a place where the past, present, and future collide, showing contrasts like small-town roots with an energetic, evolving identity.</p>

        <p>Ho Fatt created the piece using her own colour drawings and assembled 1" x 1" tiles that she carefully cut and arranged. A key technique used is optical mixing, where multiple values of the same colour (for example, several shades of green) are placed together to create visual depth and guide the viewer’s eye through the scenes. Pearlescent tiles add a luminous quality that draws attention to details and encourages closer viewing.
        The sculpture’s collage of imagery includes recognizable elements such as a train, the winding Bow River, spectacular sunsets, and sunny and moonlit skies, along with references to Cochrane’s family life, culture, business, parks, flora and fauna, industry, recreation, and history. The artwork measures 7’6” high × 5’6” wide × 4 feet deep, and the artist describes it as a milestone piece, emphasizing that mosaics are meaningful to her for they are built to last.</p>

      </div>

      <h3>Test Your Knowledge</h3>
      <div className="art-controls">
        <button className="primary-button" onClick={() => navigate('/cochrane/quiz')}>Take Quiz</button>
        <button className="secondary-button" onClick={() => navigate('/')}>Back</button>
      </div>

    </div>
  );
}

export default Cochrane;