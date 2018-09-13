export const membersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MEMBERS':
      return action.members;
  default:
    return state;
  }
};
