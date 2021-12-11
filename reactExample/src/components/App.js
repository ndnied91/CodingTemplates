import React from 'react'

import {connect} from 'react-redux'
import { fetchCurrentBlog ,  getPosts } from '../actions'

import Functional from './Functional'
import Form from './Form'

import PropSystem from './PropSystem'

class App extends React.Component{

  render(){

    const showPosts=()=>{
          if( this.props.posts !== null ){
              return this.props.posts.map((blog , index)=>{
                return <div key={blog.id}> {blog.title} </div>
              })
          }
              return <div> No posts loaded yet </div>

    }


    return(
      <div>
          <button onClick={()=> this.props.fetchCurrentBlog('hi')  } >  Hi there </button>
          <button onClick={()=> this.props.getPosts()  } >  Get Posts </button>

          {showPosts()}
          {this.props.posts ?  <Functional/> :  <Form/> }

          <PropSystem name={'Jerry'} color={'blue'}/>

       </div>


    )
  }
}



const mapStateToProps = (state) =>{
  return { posts : state.external }
}

export default connect( mapStateToProps ,  { fetchCurrentBlog  , getPosts} )(App)
