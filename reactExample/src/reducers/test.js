

const INITIAL_STATE={
  title:''
}



export default function(state=INITIAL_STATE , action){
  switch(action.type){
    case 'TEST':
      return action.payload

    default:
      return state
  }
}
