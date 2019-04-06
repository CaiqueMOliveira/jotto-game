import { correctGuess } from "./successActions";
import { CORRECT_GUESS } from "./types";

describe("correctGuess", () => {
  it("should return an action with type `CORRECT_GUESS`", () => {
    const responseFromCorrectGuess = correctGuess();
    expect(responseFromCorrectGuess).toEqual({ type: CORRECT_GUESS });
  });
});
