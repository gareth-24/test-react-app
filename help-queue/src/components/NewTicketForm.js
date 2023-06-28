import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import { v4 } from 'uuid'; // new code

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      // need to parseInt here if we get numbers from the form
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;