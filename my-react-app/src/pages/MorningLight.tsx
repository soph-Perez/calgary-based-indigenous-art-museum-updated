import { useNavigate } from 'react-router-dom';

function Morninglight() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Morning Light</h1>
      
      <h3>Test your Knowledge</h3>
      <p>Stephanie One Spot’s artistic practice explores the themes of time, memory, and space, using a wide range of materials that change depending on the message of each project. Her work blends photography, spray paint, acrylics, mixed media, and natural elements such as hide, willow, sand, dirt, bark, and tree materials, alongside visual media and projection. By combining both contemporary and traditional materials, her art reflects the relationship between personal memory, land, and cultural identity.
A significant part of her creative process involves researching traditional stories and studying maps of ancestral territories. These maps and narratives influence the direction of her artwork, helping her highlight and preserve Indigenous histories that are often overlooked. Rather than focusing on a single style, her pieces are shaped by the theme and cultural context of each project.
Through her work, Stephanie aims to pass down knowledge to future generations, using visual storytelling as a method of cultural preservation. Her art emphasizes continuity — connecting past teachings, present expression, and future learning — while reinforcing the importance of land, memory, and identity within Indigenous artistic practice.
</p>

      <h3>Test your Knowledge</h3>
      <button onClick={() => navigate('/morninglight/quiz')}> 
        Take Quiz
      </button>

      <button onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
}

export default Morninglight;