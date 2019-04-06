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
    const guessedWordComponent = findByTestAttribute(
      wrapper,
      "component-guessed-word"
    );
    expect(guessedWordComponent.length).toBe(1);
  });

  it("should render instructions to guess a word", () => {
    const instructionComponent = findByTestAttribute(
      wrapper,
      "guess-instructions"
    );
    expect(instructionComponent.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});

it("shouldn't throw warning with expected props", () => {
  const propsErrors = checkProps(GuessedWords, defaultProps);
  expect(propsErrors).toBeUndefined();
});
