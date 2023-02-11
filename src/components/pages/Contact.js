import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

const styles = {
  error: {
    color: "red",
    fontSize: "1.2rem",
  },
};

function Contact() {
  // state variable for form fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // state variables for error handling
  const [errorMessage, setErrorMessage] = useState("");

  // obtain name and value of input
  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set state of name, email, subject or message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // handle blur, show error message
  function handleBlur(e) {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required!`);
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.value]: e.target.value });
    }
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Validate email using helper and name
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      className="text-center"
      style={{ width: "50%" }}
    >
      <h2 className="heading">Let's connect!</h2>

      <MDBInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={name}
        name="name"
        label="Name"
        v-model="name"
        wrapperClass="mb-4"
      />

      <MDBInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={email}
        name="email"
        type="email"
        label="Email address"
        v-model="email"
        wrapperClass="mb-4"
      />

      <MDBInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={subject}
        name="subject"
        label="Subject"
        v-model="subject"
        wrapperClass="mb-4"
      />

      <MDBTextArea
        onChange={handleChange}
        onBlur={handleBlur}
        value={message}
        name="message"
        wrapperClass="mb-4"
        label="Message"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center"
        label="Send me copy"
      />
      <MDBBtn onClick={handleSubmit} color="dark" block className="my-4">
        Send
      </MDBBtn>
      <div style={styles.error}>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default Contact;
