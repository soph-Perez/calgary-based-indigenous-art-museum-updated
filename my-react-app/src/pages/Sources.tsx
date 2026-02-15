import { useNavigate } from "react-router-dom";

function Sources() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sources</h1>

      <ul className="sources-list">

        <h2>Exhibits & Artists</h2>

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

        <h2>Cultural & Community Context</h2>

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

        <li>
          <a
            href="https://en.wikipedia.org/wiki/Medicine_wheel_(symbol)"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Medicine Wheel – Symbol Overview
          </a>
        </li>

        <li>
          <a
            href="https://www.blackfeetculturecamp.com/gallery/geometric-par-fleche-art/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Blackfeet Culture Camp – Geometric Par Fleche Art
          </a>
        </li>

        <li>
          <a
            href="https://traceassociates.ca/the-msash/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            The MSASH – Cultural Significance
          </a>
        </li>

        <li>
          <a
            href="https://stoneynakodanations.com/programs-and-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Stoney Nakoda Nations – Programs & Services
          </a>
        </li>

        <h2>Video Sources</h2>

        <li>
          <a
            href="https://www.youtube.com/watch?v=3sp0zR_wwvE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube Video Source 1
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=95UyCuCyBzg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube Video Source 2
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=g2za4irzHic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube Video Source 3
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=dPtJ2jQKyog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube Video Source 4
          </a>
        </li>

        <h2>Digital Assets & Textures</h2>

        <li>
          <a
            href="https://ambientcg.com/view?id=WoodFloor051"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AmbientCG – Wood Floor Texture
          </a>
        </li>

        <li>
          <a
            href="https://ambientcg.com/view?id=Wood051"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AmbientCG – Wood Texture
          </a>
        </li>

        <li>
          <a
            href="https://ambientcg.com/view?id=Metal055A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AmbientCG – Metal Texture
          </a>
        </li>

        <li>
          <a
            href="https://ambientcg.com/view?id=Wallpaper001A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AmbientCG – Wallpaper Texture
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
