import {useState, useEffect} from "react";

const COLOURS = ["blue", "green", "red", "black", "brown"];
const ANIMALS = ["bear", "tiger", "snake", "donkey"];

function toTitleCase(string){
  const capitalisedFirstLetter = string.charAt(0).toUpperCase();
  const lowerCaseRemainingLetters = string.substr(1).toLowerCase();

  return capitalisedFirstLetter + lowerCaseRemainingLetters;
}

const TigerTypeField = () => {
  return(
    <label>
      Type of tiger
      <input
        type="text"
        id="tiger-type"
        name="tiger-type"
      />
    </label>
  );
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colour, setColour] = useState("");
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  useEffect(() => {
    displayTigerTypeField();
  }, [selectedAnimals]);

  const displayTigerTypeField = () => {
    if (selectedAnimals.includes("tiger")){
      return <TigerTypeField />
    }
  }

  const handleAddition = (animal) => {
    setSelectedAnimals([animal, ...selectedAnimals]);
  }

  const handleRemoval = (animal) => {
    // return the list of selected animals excluding the one passed in here
    const filteredAnimals = selectedAnimals.filter(a => a !== animal);
    setSelectedAnimals(filteredAnimals);
  }

  const handleChange = (event) => {
    if (event.target.checked === true) {
      handleAddition(event.target.value);
    }
    else if (event.target.checked === false) {
      handleRemoval(event.target.value);
    }
  };

  return(
    <form htmlclass="contact-form">
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </label>
      <label htmlFor="colour">
        Colour
        <select
          id="colour"
          value={colour}
          onChange={(event) => setColour(event.target.value)}
          onBlur={(event) => setColour(event.target.value)}
        >
          {COLOURS.map((colour) => (
            <option key={colour} value={colour}>
              {colour}
            </option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend>Animal</legend>
        {ANIMALS.map((animal) => (
          <label key={animal} htmlFor={animal}>
            {toTitleCase(animal)} <input type="checkbox" id={animal} name={animal} key={animal} value={animal} onChange={(event) => handleChange(event)} />
          </label>
        ))}
      </fieldset>
      {displayTigerTypeField()}
    </form>
  );
};

export default ContactForm;
