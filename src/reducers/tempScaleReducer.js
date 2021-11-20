// eslint-disable-next-line import/no-anonymous-default-export
export default (prevState = 'celsius', action) => {
  switch (action.type) {
    case 'TOGGLE_TEMP_SCALE':
      return prevState === 'celsius' ? 'fahrenheit' : 'celsius';
    default:
      return prevState;
  }
};
