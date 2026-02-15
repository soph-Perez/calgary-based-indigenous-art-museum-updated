import { useNavigate } from 'react-router-dom';
import LifeGiverImg from "../assets/LifeGiver.webp";

function LifeGiver() {
  const navigate = useNavigate();

  return (
    <div className="art-page">
      <h1 className="art-title">Life Giver</h1>
      <img className="art-image" src={LifeGiverImg} alt="Life Giver" />

      <div className="art-description">
        <h3>Description</h3>
        <p>Life Giver is a digital artwork by Autumn Whiteway from her collection All My Relations, a phrase that expresses the interconnectedness of all creation—people, animals, plants, and even inanimate things—emphasizing the responsibility to live in balance within a larger system of relationships. In this piece, Whiteway reimagines herself as Sky Woman from an Ojibway creation story about the origin of Turtle Island (North America). In the story, the world is covered in water, and Turtle offers its back as a resting place. Several animals dive to retrieve soil from the ocean floor, but it is Muskrat who succeeds, bringing back the soil that forms Turtle Island. The artwork is framed within the Medicine Wheel, where the circle represents the cycle of life and its repeating nature. Turtle’s shell contains lunar calendar teachings, and Sky Woman is shown pregnant—inside her womb is Whiteway’s son, Migizi—with the placenta and umbilical cord connected like roots to Turtle Island, symbolizing Indigenous heritage and continuity. The landscape includes Alberta elements such as the Rocky Mountains and plant life, and the piece uses meaningful numbers: 7 rosehips represent the seven generations of ancestors, while other repeated “4” motifs connect to the four sides/teachings of the Medicine Wheel.</p>

        <p>
 The artwork is filled with animals commonly found in Alberta—wolf, eagle, bison, dragonfly, bees, and trout—each carrying teachings. In the Seven Sacred Grandfather Teachings, the wolf symbolizes humility, and the animals together represent the “two-legged, four-legged, winged, and finned ones,” showing how land, air, and water life are all linked. The bees symbolize the maintenance of life, while dragonflies represent souls. A vine wrapping around Sky Woman reinforces that everything is connected, and the artwork also includes a white buffalo calf connected to Lakota prophecy, pointing toward major change and renewal.
 </p>
      </div>

      <h3>Test Your Knowledge</h3>
      <div className="art-controls">
        <button className="primary-button" onClick={() => navigate('/lifegiver/quiz')}>Take Quiz</button>
        <button className="secondary-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
}

export default LifeGiver;
