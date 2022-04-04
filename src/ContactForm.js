import {useState, useEffect} from "react";

const COLOURS = ["blue", "green", "red", "black", "brown"];
const ANIMALS = ["bear", "tiger", "snake", "donkey"];

function toTitleCase(string){
  const capitalisedFirstLetter = string.charAt(0).toUpperCase();
  const lowerCaseRemainingLetters = string.substr(1).toLowerCase();

  return capitalisedFirstLetter + lowerCaseRemainingLetters;
}

const TigerTypeField = (props) => {
  return(
    <div className="input-collection">
      <label>
        Type of tiger
        <span className="required-text">Required</span>
        <input
          type="text"
          id="tiger-type"
          name="tiger-type"
          onChange={(event) => props.setTigerType(event.target.value)}
          onBlur={(event) => props.setTigerType(event.target.value)}
          value={props.tigerType}
          required
        />
      </label>
    </div>
  );
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colour, setColour] = useState("Blue");
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [tigerType, setTigerType] = useState("");

  useEffect(() => {
    displayTigerTypeField();
  }, [selectedAnimals]);

  const displayTigerTypeField = (tigerType, setTigerType) => {
    if (selectedAnimals.includes("tiger")){
      return <TigerTypeField tigerType={tigerType} setTigerType={setTigerType} />
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

  // TODO: Switch statement that either sets the validated target's state, or pushes a validation error to the validation error array
  // and calls a function to render validation error component
  // switch case can take care of the tiger type field requirement which will probably come from submit onchange
  // const formValidation = (fieldName) => {
  //   switch (fieldName) {
  //     case email:
  //     emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //     emailValid ? setEmail()
  //       break;
  //     default:
  //
  //   }
  // }

  // TODO: Submit button will disable with a tooltip if there are validation issues, otherwise it will submit with a form
  // action that just validates that the data was recieved okay

  return(
    <div className="form-container">
      <form className="contact-form">

        <div className="input-collection">
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
        </div>

        <div className="input-collection">
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
        </div>

        <div className="input-collection">
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
                  {toTitleCase(colour)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset>
          <legend>Animal</legend>
          {ANIMALS.map((animal) => (
            <label key={animal} htmlFor={animal} className="label-checkbox">
              <input type="checkbox" id={animal} name={animal} key={animal} value={animal} onChange={(event) => handleChange(event)} /> {toTitleCase(animal)}
            </label>
          ))}
        </fieldset>

        {displayTigerTypeField(tigerType, setTigerType)}

        <button type="submit" value="Submit">Submit</button>

      </form>
    </div>
  );
};

export default ContactForm;
