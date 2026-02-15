import { useNavigate } from 'react-router-dom';

function ElderStories() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>The Stories From My Elders Lift Me Up</h2>

      <p>The Stories From My Elders Lift Me Up is a mixed-media acrylic artwork by Métis and Indigenous artist Aguenus (Angela Hall) that celebrates the profound influence of Indigenous storytellers, Elders, and Knowledge Keepers on cultural identity and personal growth. In this piece, a young girl appears to be lifted upward by the spirits and teachings woven through traditional Indigenous creation stories, illustrating how wisdom passed down through generations shapes self-understanding and moral grounding. The imagery conveys the idea that stories are not merely entertainment but foundational guides for how to live well and in harmony with all beings, reflecting the role of heritage in shaping worldview and values.

The painting incorporates specific symbolic elements loaded with cultural meaning. The sweetgrass held by the figure represents kindness, while the eagle feather is a long-standing Indigenous symbol of respect and honour of life. The fancy shawl evokes transformation, akin to that of a butterfly emerging into a new stage of life. Through these layered symbols, the artwork points to the values that Elders impart — values that elevate and uplift those who carry them forward.

Aguenus (Angela Hall) herself is a member of the Métis Nation with Cree and Stoney ancestry and has used her artistic practice to express cultural identity, healing, and interconnection. Her broader body of work blends personal narrative with collective Indigenous themes, often drawing on storytelling as a way to preserve cultural memory and strengthen community belonging.
</p>

<p>Test your knowledge</p>
      <button onClick={() => navigate('/elderstories/quiz')}> {/* ADD CORRECT PATH*/}
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default ElderStories;