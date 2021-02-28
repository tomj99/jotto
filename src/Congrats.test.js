import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "./Congrats";

import { findByTestAttr } from "../test/setupTests";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

//renders without error
test("renders without error", () => {
  const wrapper = setup();
  const congratsComp = findByTestAttr(wrapper, "component-congrats");
  expect(congratsComp.length).toBe(1);
});

//doesn't render text when the success prop is false
test("renders no text when the success prop is false", () => {});

//renders non empty congratulations message when success prop is true
test("renders non-empty congrats message when success prop is true", () => {});
