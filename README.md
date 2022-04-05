# React Contact Form

## Project planning

**Functionality:**

* Users are able to enter data
* The data is validated either after leaving an input, or on submission
* On submission they are validated that their message was sent okay

**Things to consider:**

**Usability:**

* Mobile first responsive design that works on standard mobile tablet laptop and desktop
* A simple and clean design that makes filling in the form an easy process
* Validation is clear and helpful

**Accessibility:**

* Users can tab through the form
* Form is screen reader friendly
* Colours are colour blind friendly

**Nice to haves:**

Tests would be the next step in improving this contact form, however it is simple and straight forward to test manually so this is low risk for now.
Somewhere to send the data to store it/action on it. Obviously a core point of a contact form but for now I want to focus on data entry and validation.

## Project notes

**Next steps**

* Improve screen reader accessibility, I haven't tested what the experience is like with a screen reader yet. The form can be accessed keyboard only with tabbing though.
* I would add TypeScript to the project because it would make the code safer and more clean
* Add better on submit functionality that takes the user to a page that validates that their message was sent and relays what they entered back to them
* Have somewhere the message data is stored once submitted
* Improve the styles for desktop
* Refactor the ContactForm component, it's a big file and lots of functionality all mixed in together, there is repetitive code that can be reduced, and the way the conditional field is rendered is messy.

**Know issues**

* After a validation error pops up, and the user re-enters the correct data, the submit button needs to be pressed twice before it can successfully submit. This is because the state updates on blur so the first click doesn't have the context for the updated state yet. with more time I would fix this.
* ES lint returns the errors; Unreachable code (lines 42, 47, 52) and Unexpected lexical declaration in case block (lines 123, 127, 131, 132) which I haven't looked into yet since they didn't affect functionality.
