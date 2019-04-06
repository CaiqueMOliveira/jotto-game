import successReducer from "./";
import { CORRECT_GUESS } from "../../actions/types";

it("should return default initial state of `false` when no action is passed", () => {
  const initialState = successReducer(undefined, {});
  expect(initialState).toBe(false);
});

it("should return state of true upon receiving an action of type `CORRECT_GUESS`", () => {
  const responseFromReducer = successReducer(undefined, {
    type: CORRECT_GUESS
  });
  expect(responseFromReducer).toBe(true);
});
