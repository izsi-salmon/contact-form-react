import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";

const App = () => {
  return(
    <div className="main-content">
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
