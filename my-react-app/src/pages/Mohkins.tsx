import { useNavigate } from 'react-router-dom';
import MohkinsImg from "../assets/mohkins.webp";

function Mohkins() {
  const navigate = useNavigate();

  return (
    <div className="art-page">
      <h1 className="art-title">Moh'kins'tsis Project</h1>
      <img className="art-image" src={MohkinsImg} alt="Moh'kins'tsis Project" />

      <div className="art-description">
        <h3>Description</h3>
        <p>The Moh’kins’tsis Project is an Indigenous public artwork connected to the city of Calgary, whose original Blackfoot name Moh’kins’tsis means “Elbow,” referring to the bend of the Bow River. The artwork is divided into three themes — Past, Present, and Future — to represent the journey of Indigenous communities across time.</p>

          <p>The Past section highlights natural foliage, buffalo grass, and early tribes who settled the mountainous region. Buffalo grass symbolizes prosperity and survival, while people gathered together reflect strong community bonds and the passing down of ancestral knowledge. The eagle appears as a spiritual figure representing protection and guidance from animal spirits that coexisted with the people.
          The Present centers on a chicken dancer, symbolizing the spirit of the land being kept alive through cultural sharing and the resilience required to continue traditions despite historical challenges.
          The Future envisions Indigenous traditions and culture being revived, celebrated, and embraced by all people, while still maintaining a connection to the wise and protective eagle guides. Overall, the artwork serves as a visual narrative of cultural endurance, identity, and reconciliation, reminding viewers that Indigenous heritage continues to live and evolve rather than remain only in the past.</p>
      </div>

      <h3>Test Your Knowledge</h3>
      <div className="art-controls">
        <button className="primary-button" onClick={() => navigate('/mohkins/quiz')}>Take Quiz</button>
        <button className="secondary-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
}

export default Mohkins;