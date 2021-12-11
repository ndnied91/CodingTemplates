
//EXAMPLE OF A CALLBACK THAT GETS TRIGGERED WHEN THE CHILD CALLS THE FUNCTION
renderContent(){
  if(this.state.showFormReview){
    return <BlogReview onCancel={()=> this.setState({showFormReview: false})}/>
  }
  return <BlogForm onBlogSubmit={ ()=> this.setState({showFormReview: true}) }/>
}




return(
    <div className="container">
      <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}> //this is the prop getting passed
              <br></br>

              <h1 className="text-center"> Create a new blog here </h1>
              <br/>

      <form/>







///////////////////////
