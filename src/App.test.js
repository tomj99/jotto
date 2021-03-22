import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

import { findByTestAttr } from "../test/setupTests";

Enzyme.configure({ adapter: new EnzymeAdapter() });

//shallow grabs only the top level element
const setup = () => shallow(<App />);

test("app renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});


