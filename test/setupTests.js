// sets up test-data attributes
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
