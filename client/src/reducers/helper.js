/**
 * Reducers wrapper
 */
export const wrap = (reducers, initialState) => (state = initialState, { type, payload }) => {
  if (reducers.hasOwnProperty(type)) {
    return reducers[type](state, payload);
  }
  return state;
};

export const onRequest = (state) => {
  return { ...state, error: null, loading: true };
};
