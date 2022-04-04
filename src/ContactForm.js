import {useState, useEffect} from "react";

const COLOURS = ["blue", "green", "red", "black", "brown"];
const ANIMALS = ["bear", "tiger", "snake", "donkey"];

function toTitleCase(string){
  const capitalisedFirstLetter = string.charAt(0).toUpperCase();
  const lowerCaseRemainingLetters = string.substr(1).toLowerCase();

  return capitalisedFirstLetter + lowerCaseRemainingLetters;
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colour, setColour] = useState("");
  // Are both of these arrays needed? Or will they eventually share functionality?
  const [animal, setAnimal] = useState([]);

  // I want this state to be an array that I can push selected checkbox values to
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  // useEffect(() => {
  //   console.dir(animal)
  //   console.log("Use effect, animal is:" + animal[0])
  // }, [animal]);

// This handle change event aims to push the selected check box into the target state array
// It would be nice if this could eventually toggle as well, so deselecting, selecting would push and remove from the array
  const handleChange = (event) => {
    setSelectedAnimals([event.target.value]);
    console.log(selectedAnimals);
  };

  return(
    <form>
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
            {/* I want to be able to select an input and run a function that will push the selected checkbox's value to state, so that eventually I have an array of all selected checkboxes */}
            {toTitleCase(animal)} <input type="checkbox" id={animal} name={animal} key={animal} value={animal} onChange={(event) => handleChange(event)} />
          </label>
        ))}
      </fieldset>
      {/* Contitional field */}
      <label>
        Type of tiger
        <input
          type="text"
          id="tiger-type"
          name="tiger-type"
        />
      </label>
    </form>
  );
};

export default ContactForm;
