import checkPropTypes from "check-prop-types";
import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// sets up test-data attributes
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
