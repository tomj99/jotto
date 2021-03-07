import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/setupTests";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(
      wrapper,
      "component-guess-instructions"
    );
    expect(instructions.text().length).not.toBe(0);
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
});

describe("if there are words guessed", () => {});
