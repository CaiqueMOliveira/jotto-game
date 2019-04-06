import React from "react";
import PropTypes from "prop-types";

function GuessedWords({ guessedWords }) {
  function renderGuessInstructions() {
    if (guessedWords.length) return;
    return (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }

  return (
    <div data-test="component-guessed-word">{renderGuessInstructions()}</div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      matchedLetters: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
