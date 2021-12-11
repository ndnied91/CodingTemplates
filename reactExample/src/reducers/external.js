


export default function(state=null , action){
  switch(action.type){
    case 'EXTERNAL_CALL':
      return action.payload

    default:
      return state
  }
}
