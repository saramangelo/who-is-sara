import React, { useState }  from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const styles = {
  error: {
    color: 'red',
    fontSize: '1.2rem',
  },
}

function Contact() {
const [errorMessage, setErrorMessage] = useState("");
const [formState, setFormState] = useState({
  name: "",
  email: "",
  message: "",
});

// const { name, email, message } = formState;

function handleChange(e) {
  if (!e.target.value.length) {
    setErrorMessage(`${e.target.name} is required!`)
  } else {
    setErrorMessage("");
  }
  
  if (!errorMessage) {
    setFormState({ ...formState, [e.target.value]: e.target.value });
  }
}


function handleSubmit(e) {
  e.preventDefault();
}


// export default function Contact() {
  return (
    <form onSubmit={handleSubmit} id='form' className='text-center' style={{ width: '50%' }}>
      <h2 className='heading'>Let's connect!</h2>

      <MDBInput onBlur={handleChange} name='Name' label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput onBlur={handleChange} name='Email' type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput onBlur={handleChange} name='Subject' label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea onBlur={handleChange} name='Message' wrapperClass='mb-4' label='Message' />

        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      <MDBBtn color='dark' block className='my-4'>
        Send
      </MDBBtn>
      <div style={styles.error}>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default Contact;