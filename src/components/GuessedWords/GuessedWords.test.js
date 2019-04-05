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

it("shouldn't throw warning with expected props", () => {
  const propsErrors = checkProps(GuessedWords, defaultProps);
  expect(propsErrors).toBeUndefined();
});
