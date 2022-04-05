import {useState, useEffect} from "react";

const COLOURS = ["blue", "green", "red", "black", "brown"];
const ANIMALS = ["bear", "tiger", "snake", "donkey"];

function toTitleCase(string){
  const capitalisedFirstLetter = string.charAt(0).toUpperCase();
  const lowerCaseRemainingLetters = string.substr(1).toLowerCase();

  return capitalisedFirstLetter + lowerCaseRemainingLetters;
}

// Notes: not really happy about how this component is passing things back and forth between the parent
// it doesn't feel safe or best practice, so with more time I would implement this more cleanly
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
          onBlur={(event) => props.formValidation(event.target.name, event.target.value)}
          value={props.tigerType}
          required
        />
      </label>
      {props.validationError("tiger-type")}
    </div>
  );
}

const ValidationError = (props) => {
  switch (props.inputType) {
    case "email":
      return(
        <span className="validation-error"><i className="fa-solid fa-triangle-exclamation"></i> Please enter a valid email</span>
      );
      break;
      case "password":
        return(
          <span className="validation-error"><i className="fa-solid fa-triangle-exclamation"></i> Please enter a password longer than 8 characters</span>
        );
        break;
      case "tiger-type":
        return(
          <span className="validation-error"><i className="fa-solid fa-triangle-exclamation"></i> Please enter a type of tiger</span>
        );
        break;
    default:
    return(
      <span className="validation-error"><i className="fa-solid fa-triangle-exclamation"></i> Please enter valid data and fill in required field(s)</span>
    );
  }
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [colour, setColour] = useState("Blue");
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [tigerType, setTigerType] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    displayTigerTypeField();
  }, [selectedAnimals]);

  const displayTigerTypeField = (tigerType, setTigerType) => {
    if (selectedAnimals.includes("tiger")){
      return <TigerTypeField tigerType={tigerType} setTigerType={setTigerType} formValidation={formValidation} validationError={displayValidationError} />
    }
  }

  useEffect(() => {
    displayValidationError();
  }, [validationErrors]);

  const displayValidationError = (inputType) => {
    if (validationErrors.length > 0 && validationErrors.includes(inputType)){
      return <ValidationError inputType={inputType} />;
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

// Notes: These add/remove validation errors are really duplicates of the handle addition code, this
// could be refactored to be more concise and non repeating
  const addValidationError = (validationError) => {
    setValidationErrors([validationError, ...validationErrors]);
    console.log(validationError);
  }

  const removeValidationError = (validationError) => {
    // return the list of selected animals excluding the one passed in here
    const filteredValidationErrors = validationErrors.filter(a => a !== validationError);
    setValidationErrors(filteredValidationErrors);
  }

  const formValidation = (fieldName, fieldValue) => {
    switch (fieldName) {
      case "email":
        const emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || fieldValue === "";
        emailValid ? (removeValidationError(fieldName)) : (addValidationError(fieldName));
        break;
      case "password":
        const passwordValid = fieldValue.length >= 8 || fieldValue === "";
        passwordValid ? (removeValidationError(fieldName)) : (addValidationError(fieldName));
        break;
        case "tiger-type":
          const isTigerTypeRequired = selectedAnimals.includes("tiger");
          const tigerTypeValid = fieldValue.length > 0 || !isTigerTypeRequired;
          tigerTypeValid  ? (removeValidationError(fieldName)) : (addValidationError(fieldName));
          break;
      default:
      return;
    }
  }

  // Notes: I realise an alert is not the most elegant way to finish your form experience, however I don't want to spend further time on
  // the form action, it was the simplest way to validate the user and test that all our data is recieved properly.
  const handleSubmit = (event) => {
    if (validationErrors.length > 0){
      event.preventDefault();
    } else {
      const stringOfAnimals = selectedAnimals.toString();
      alert(`Thanks! Your message was recieved. \n Your message: \n Email: ${email} \n Password: ${password} \n Colour:  ${colour} \n Animals: ${stringOfAnimals} ${selectedAnimals.includes("tiger") ? `\n Type of Tiger: ${tigerType}` : ""}`);
    }
  }

  return(
    <div className="form-container">
      <form onSubmit={(event) => handleSubmit(event)} className="contact-form">

        <div className="input-collection">
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={(event) => formValidation(event.target.name, event.target.value)}
              value={email}
            />
          </label>
          {displayValidationError("email")}
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
              onBlur={(event) => formValidation(event.target.name, event.target.value)}
              value={password}
            />
          </label>
          {displayValidationError("password")}
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
