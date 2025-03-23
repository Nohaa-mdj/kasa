import { useParams } from "react-router-dom";
import logements from "../data.json";

function LogementDetails() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <h1>Logement non trouvé</h1>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <p>Localisation : {logement.location}</p>
      <h3>Équipements :</h3>
      <ul>
        {logement.equipments.map((equipement, index) => (
          <li key={index}>{equipement}</li>
        ))}
      </ul>
    </div>
  );
}

export default LogementDetails;
