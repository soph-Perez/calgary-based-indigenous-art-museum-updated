import { useNavigate } from "react-router-dom";

function Sources() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sources</h1>

      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        <li>
          <a
            href="https://www.calgary.ca/arts-culture/public-art/inglewood-bird-sanctuary-nature-centre.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Inglewood Bird Sanctuary Nature Centre – Land Is Home Exhibit
          </a>
        </li>

        <li>
          <a
            href="https://www.calgary.ca/arts-culture/public-art/indigenous-works.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Calgary Indigenous Public Art Works
          </a>
        </li>

        <li>
          <a
            href="https://yycbump.ca/artists/nathan-meguinis-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Nathan Meguinis – Artist Profile
          </a>
        </li>

        <li>
          <a
            href="https://www.stephanieonespot.com/aboutme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Stephanie One Spot – About / Biography
          </a>
        </li>

        <li>
          <a
            href="https://www.aguenusart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Aguenus Art – Official Site
          </a>
        </li>

        <li>
          <a
            href="https://autumn.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Autumn Whiteway – Portfolio
          </a>
        </li>

        <li>
          <a
            href="https://kalumtdan.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Kalum Teke Dan – Moh’kins’tsis Project
          </a>
        </li>

        <li>
          <a
            href="https://www.calgary.ca/communities/indigenous/groups-in-calgary.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Indigenous Groups in Calgary – Community Context
          </a>
        </li>
      </ul>

      <button onClick={() => navigate('/')}>
        Back
      </button>
      
    </div>
  );
}

export default Sources;
