import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import reducers from "../src/reducers";

export const createATestingStore = initialState => {
  return createStore(reducers, initialState);
};

export const findByTestAttribute = (shallowWrapper, testAttributeName) => {
  return shallowWrapper.find(`[data-test="${testAttributeName}"]`);
};

export const checkProps = (componentToCheckTheProps, expectedProps) => {
  const propsErros = checkPropTypes(
    componentToCheckTheProps.propTypes,
    expectedProps,
    "prop",
    componentToCheckTheProps.name
  );
  return propsErros;
};
