const initialState = {
  projects: []
}

export function todo(state = initialState, action) {
  console.log('reducer.state', state);
  switch (action.type) {
    case 'ADD_PROJECT':
      return Object.assign(
        {},
        state,
        {
          projects: state.projects.concat(action.project)
        });
    case 'DELETE_PROJECT':
      return Object.assign(
        {},
        state,
        {
          projects: state.projects.filter((project) => {
            return project.id !== action.id;
          })
        }
      )
    default:
      return state
  }
}
