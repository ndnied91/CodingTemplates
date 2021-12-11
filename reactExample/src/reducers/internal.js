// INTERNAL_CALL



const INITIAL_STATE={
  title:''
}



export default function(state=null , action){
  switch(action.type){
    case 'INTERNAL_CALL':
      return action.payload
      
    default:
      return state
  }
}
