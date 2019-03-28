import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (shallowWrapper, testAttributeName) => {
  return shallowWrapper.find(`[data-test="${testAttributeName}"]`);
};

export const checkProps = (componentToCheckTheProps, expectedProps) => {
  const propsErros = checkPropTypes(
    componentToCheckTheProps.propTypes,
    expectedProps,
    'prop',
    componentToCheckTheProps.name
  );
  return propsErros;
};