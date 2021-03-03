import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";

import { findByTestAttr, checkProps } from "../test/setupTests";

const defaultProps = { success: false};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />);
};

//renders without error
test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

//doesn't render text when the success prop is false
test("renders no text when the success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("")
});

//renders non empty congratulations message when success prop is true
test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false};
  checkProps(Congrats, expectedProps);
})
