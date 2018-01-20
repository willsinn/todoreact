
export function addProject (project){
    return {
      type: 'ADD_PROJECT',
      project
    }
}


export function deleteProject (id){
  return {
    type: 'DELETE_PROJECT',
    id
  }
}




//one sheet for the state
