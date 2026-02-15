import { useNavigate } from "react-router-dom";

function Sources() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sources</h1>

      <div className="sources-list">

        <h2>Exhibits & Artists</h2>
        <ul>
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

