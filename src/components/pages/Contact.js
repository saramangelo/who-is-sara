import React from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact Me!</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
  );
}


// this needs to be a contact form. 
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address