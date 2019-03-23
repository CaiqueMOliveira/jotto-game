export const findByTestAttribute = (shallowWrapper, testAttributeName) => {
  return shallowWrapper.find(`[data-test="${testAttributeName}"`);
}