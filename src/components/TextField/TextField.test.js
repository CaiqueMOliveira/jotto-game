import React from "react";
import { shallow } from "enzyme";
import TextField from "./";
import {
  findByTestAttribute,
  createATestingStore
} from "../../../__test__/utils";

const createShallowWrapper = (initialState = {}) => {
  const wrapper = shallow(<TextField />);
};

createShallowWrapper();

describe("render without error", () => {
  describe("word has not been guessed", () => {
    it("should render the component without error", () => {});

    it("should render the input box", () => {});

    it("should render submit button ", () => {});
  });

  describe("word has been guessed", () => {
    it("shouldn't render the input box", () => {});

    it("shouldn't render the submit button", () => {});
  });
});

describe("updating the store", () => {});
