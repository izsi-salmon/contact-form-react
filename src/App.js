import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";

const App = () => {
  return(
    <div>
      <p>Hello world!</p>
      <ContactForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
