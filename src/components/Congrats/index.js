import React from 'react';
import PropTypes from 'prop-types';

function Congrats({ success }) {
  if (success) return (
    <div data-test="component-congrats">
      <p data-test="congrats-message">
        Congratulations! You guessed teh word!
      </p>
    </div>
  );

  return (
    <div data-test="component-congrats" />
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;