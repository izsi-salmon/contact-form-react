const ContactForm = () => {
  return(
    <form>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
      </label>
      <label htmlFor="password">
        Email
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </label>
      <label htmlFor="colour">
        Colour
        <select
          id="colour"
        >
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
          <option>Black</option>
          <option>Brown</option>
        </select>
      </label>
      <fieldset>
        <legend>Animal</legend>
        <label htmlFor="bear">
          Bear <input type="checkbox" id="bear" name="bear" value="bear" />
        </label>
        <label htmlFor="tiger">
          Tiger <input type="checkbox" id="tiger" name="tiger" value="tiger" />
        </label>
        <label htmlFor="snake">
          Snake <input type="checkbox" id="snake" name="snake" value="snake" />
        </label>
        <label htmlFor="donkey">
          Donkey <input type="checkbox" id="donkey" name="donkey" value="donkey" />
        </label>
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
