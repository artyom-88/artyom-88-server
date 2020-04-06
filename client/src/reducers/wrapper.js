/**
 * Reducers wrapper
 */
const wrapper = (reducers, initialState) => (state = initialState, { type, payload }) => {
  if (reducers.hasOwnProperty(type)) {
    return reducers[type](state, payload);
  }
  return state;
};

export default wrapper;
