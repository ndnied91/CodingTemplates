

const INITIAL_STATE={
  first: null,
  last: null,
  email: null,
  date: null
}



export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'UPDATE_USER':
      return action.payload

    default:
      return state
  }
}
