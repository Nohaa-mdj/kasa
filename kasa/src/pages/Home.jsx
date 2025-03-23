/*function Home() {
  return <h1>Bienvenue sur la page d'accueil</h1>;
}

export default Home; */

import { Link } from "react-router-dom";
import logements from "../data.json";

function Home() {
  return (
    <div>
      <h1>Liste des logements</h1>
      <div className="logements-container">
        {logements.map((logement) => (
          <div key={logement.id} className="logement-card">
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} />
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
