import React from "react";
import PropTypes from "prop-types";

function GuessedWords({ guessedWords }) {
  function renderGuessInstructionsOrGuessedWord() {
    if (!guessedWords.length)
      return (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      );

    function renderGuessedWords() {
      return guessedWords.map((word, index) => (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.matchedLetters}</td>
        </tr>
      ));
    }
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
            </tr>
            <tr>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{renderGuessedWords()}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div data-test="component-guessed-words">
      {renderGuessInstructionsOrGuessedWord()}
    </div>
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
