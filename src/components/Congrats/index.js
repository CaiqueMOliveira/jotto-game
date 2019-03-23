import React from 'react';

export default function Congrats({ success }) {
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