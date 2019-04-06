import React from "react";
import { shallow } from "enzyme";
import GuessedWords from "./";
import { checkProps, findByTestAttribute } from "../../../__test__/utils";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      matchedLetters: 3
    }
  ]
};

function createShallowWrapper(props = {}) {
  const mergedProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...mergedProps} />);
}

describe("if there are not words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = createShallowWrapper({ guessedWords: [] });
  });

  it("should render without error", () => {
    const guessedWordsComponent = findByTestAttribute(
      wrapper,
      "component-guessed-words"
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  it("should render instructions to guess a word", () => {
    const instructionComponent = findByTestAttribute(
      wrapper,
      "guess-instructions"
    );
    expect(instructionComponent.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: "space",
      matchedLetters: 2
    },
    {
      guessedWord: "spacex",
      matchedLetters: 1
    },
    {
      guessedWord: "houston",
      matchedLetters: 2
    },
    {
      guessedWord: "mars",
      matchedLetters: 1
    }
  ];

  beforeEach(() => {
    wrapper = createShallowWrapper({ guessedWords });
  });

  it("should render without error", () => {
    const guessedWordsComponent = findByTestAttribute(
      wrapper,
      "component-guessed-words"
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  it('should render "guessed words" section', () => {
    const guessedWordsSection = findByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordsSection.length).toBe(1);
  });

  it("should count the correct number of guessed words", () => {
    const guessedWord = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWord.length).toBe(guessedWords.length);
  });
});

it("shouldn't throw warning with expected props", () => {
  const propsErrors = checkProps(GuessedWords, defaultProps);
  expect(propsErrors).toBeUndefined();
});
