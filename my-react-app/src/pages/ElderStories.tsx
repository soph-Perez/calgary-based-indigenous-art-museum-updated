import { useNavigate } from 'react-router-dom';
import ElderStoriesImg from "../assets/TheStoriesFromMyEldersLiftMeUp.webp";

function ElderStories() {
  const navigate = useNavigate();
  return (
    <div className="art-page">
      <h1 className="art-title">The Stories From My Elders Lift Me Up</h1>
      <img className="art-image" src={ElderStoriesImg} alt="The Stories From My Elders Lift Me Up" />

      <div className="art-description">
        <h3>Description</h3>
        <p>The Stories From My Elders Lift Me Up is a mixed-media acrylic artwork by Métis and Indigenous artist Aguenus (Angela Hall) that celebrates the profound influence of Indigenous storytellers, Elders, and Knowledge Keepers on cultural identity and personal growth. In this piece, a young girl appears to be lifted upward by the spirits and teachings woven through traditional Indigenous creation stories, illustrating how wisdom passed down through generations shapes self-understanding and moral grounding. The imagery conveys the idea that stories are not merely entertainment but foundational guides for how to live well and in harmony with all beings, reflecting the role of heritage in shaping worldview and values.</p>

        <p>
        The painting incorporates specific symbolic elements loaded with cultural meaning. The sweetgrass held by the figure represents kindness, while the eagle feather is a long-standing Indigenous symbol of respect and honour of life. The fancy shawl evokes transformation, akin to that of a butterfly emerging into a new stage of life. Through these layered symbols, the artwork points to the values that Elders impart — values that elevate and uplift those who carry them forward.

        Aguenus (Angela Hall) herself is a member of the Métis Nation with Cree and Stoney ancestry and has used her artistic practice to express cultural identity, healing, and interconnection. Her broader body of work blends personal narrative with collective Indigenous themes, often drawing on storytelling as a way to preserve cultural memory and strengthen community belonging.
        </p>
      </div>

      <h3>Test Your Knowledge</h3>
      <div className="art-controls">
        <button className="primary-button" onClick={() => navigate('/elderstories/quiz')}>Take Quiz</button>
        <button className="secondary-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
}

export default ElderStories;