import { useNavigate } from 'react-router-dom';

function Bufallo() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Buffalo Nations Stand and Be Noticed Quiz</h2>
      
      {/* add image here and save them in assets*/}

      <p>Nathan Meguinis is a Tsuut’ina (Sarcee Dene) artist, illustrator, animator, and powwow dancer whose mural work blends contemporary spray-paint techniques with traditional Indigenous symbolism. His mural reflects cultural heritage, spiritual identity, and the relationship between land, community, and ceremony. The visual style combines abstraction and realism, creating a modern interpretation of ancestral themes.
Colour symbolism plays a major role in the mural’s meaning. Red represents Mother Earth; green symbolizes plant life, blue reflects water, rain, and the sky; purple is associated with the Thunderbird and women; yellow represents the sun and protection; black symbolizes strength and power; and white represents holiness or spiritual beings. These colours function as a cultural language rather than decorative choices.
Central imagery includes a buffalo and camp landscape, representing the Buffalo Nations who historically lived from the buffalo. </p>

      <p>Dragonflies symbolize the month of August and seasonal transition, while traditional otter designs reference Treaty 7 territory. The mural shows youth and elders riding together, representing mentoring, parenting, and intergenerational balance. A woman at the front carries an Eagle Staff, symbolizing the traditional matriarch system and national identity.
The horses are elongated to show speed and power, with lightning bolts painted on them to further emphasize motion. Yellow handprints reference the “Yellow Hand” helpers in Tsuut’ina culture — individuals trained from a young age to assist and protect during ceremonies. Additional symbols include mountain and falling star teepee designs, turquoise horse hooves representing long-distance travel and Dene linguistic connections, and Dene floral patterns symbolizing growth. A standing Grassdancer holding an Eagle Staff and red women’s pipe represents blessing the land, spiritual connection, and the merging of old and new traditions under the concept “Stand and Be Noticed.”
</p>

      <p>Test your knowledge</p>
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
