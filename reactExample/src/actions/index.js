import axios from 'axios'



//this call does not make any external calls
export const fetchCurrentBlog =  id => {
  return ({ type: 'INTERNAL_CALL' , payload : id })
}

  export const getPosts = () => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
     dispatch({ type: 'EXTERNAL_CALL' , payload: res.data})
  }

export const updateUser = (user) =>{
  return ({ type: 'UPDATE_USER' , payload : user })
}
