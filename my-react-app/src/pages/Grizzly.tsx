import { useNavigate } from 'react-router-dom';
import GrizzlyImg from "../assets/Grizzly.webp";

function Grizzly() {
  const navigate = useNavigate();

  return (
    <div className="art-page">
      <h1 className="art-title">Grizzly</h1>
      <img className="art-image" src={GrizzlyImg} alt="Grizzly" />

      <div className="art-description">
        <h3>Description</h3>
        <p>Grizzly is a wildlife painting by Gordon Wesley, a Stoney Nakoda artist from the Bighorn Reserve whose work is strongly influenced by his upbringing in the Rocky Mountain region of Alberta. Created using oil on canvas, the piece reflects Wesley’s lifelong connection to nature and the animals that inhabit his local geography. Growing up outdoors, he developed a deep appreciation for wildlife, which continues to shape his artistic focus today. </p>

        <p>
        The grizzly bear in this painting is not only a representation of the physical animal but also a symbol of strength, resilience, and respect for the natural world. Wesley’s style emphasizes realism while also capturing the spiritual presence of the animal, allowing viewers to feel both its power and its place within the ecosystem. His work has been featured in Indigenous art exhibitions such as “The Land Is Home,” which highlights Indigenous relationships with land, wildlife, and stewardship of natural spaces.
Through Grizzly, Wesley expresses the enduring connection between Indigenous peoples and the environment, celebrating wildlife as an essential part of cultural identity rather than simply a subject of observation. The painting encourages viewers to recognize the importance of protecting natural habitats and honoring the balance between humans and nature.
        </p>
      </div>

      <h3>Test Your Knowledge</h3>
      <div className="art-controls">
        <button className="primary-button" onClick={() => navigate('/grizzly/quiz')}>Take Quiz</button>
        <button className="secondary-button" onClick={() => navigate('/')}>Back</button>
      </div>

    </div>
  );
}

export default Grizzly;