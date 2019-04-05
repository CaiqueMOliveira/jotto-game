import React from "react";
import PropTypes from "prop-types";

function GuessedWords() {
  return <div />;
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
