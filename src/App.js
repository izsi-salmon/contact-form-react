import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";

const App = () => {
  return(
    <div div="main-content">
      <ContactForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
