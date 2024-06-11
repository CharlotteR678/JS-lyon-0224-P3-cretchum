import PropTypes from "prop-types";
import "./HomeStructureList.css";
import CatImage from "../../assets/images/cat.png";
import DogImage from "../../assets/images/dog.png";
import PersonImage from "../../assets/images/person.jpg";

function HomeStructureList({ structure }) {
  return (
    <div id="userCard">
      <div id="userGeneral">
        <div id="userImg">
          <img id="userPicture" src={PersonImage} alt={structure.name} />
        </div>
        <div id="userInfo">
          <h3 id="userName">{structure.name}</h3>
          <p id="userLocation">{structure.postal_code}</p>
          <p
            className="userStructure"
            id={
              structure.is_professional === 0
                ? "userParticulier"
                : "userChenil"
            }
          >
            {structure.is_professional === 0
              ? "particulier"
              : "professionnel"}
          </p>
        </div>
      </div>

      <ul id="userPref">
        <li
          className={`useranimal ${structure.cat === 0 ? "animalHidden" : "userCat"}`}
        >
          <img src={CatImage} alt="dessin de chat noir" className="animalImg" />
          <p>Chat</p>
        </li>
        <li
          className={`useranimal ${structure.dog === 0 ? "animalHidden" : "userDog"}`}
        >
          <img src={DogImage} alt="dessin de chat noir" className="animalImg" />
          <p>Chien</p>
        </li>
        <li>
          <p id="userprice">{structure.price} € </p>
        </li>
      </ul>
    </div>
  );
}

export default HomeStructureList;

HomeStructureList.propTypes = {
  structure: PropTypes.shape({
    name: PropTypes.string.isRequired,
    postal_code: PropTypes.number.isRequired,
    is_professional: PropTypes.bool.isRequired,
    cat: PropTypes.bool.isRequired,
    dog: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
