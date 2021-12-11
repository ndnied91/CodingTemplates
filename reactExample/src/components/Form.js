
import React from 'react'

import {connect} from 'react-redux'
import { updateUser} from '../actions'

class Form extends React.Component{

  constructor(props) {
  super(props)
    this.state = { first: '' , last: '' , email: '' , date: '' }
    this.onInputchange = this.onInputchange.bind(this);
}


onInputchange(event) {
   this.setState({
     [event.target.name]: event.target.value
   });
 }


onFormSubmit = (event) => {
    event.preventDefault();
    this.props.updateUser(this.state)
    this.setState({first: '' , last: '' , email: '' , date: '' });

}


  render(){


  const renderUser = () =>{
    if(this.props.currentUser.first !== null){
         return <div> Hello there {this.props.currentUser.first}</div>
    }
    return null

  }


    return(
      <div>

        {renderUser()}

            <form onSubmit={this.onFormSubmit}>
                <input name="first" placeholder="First Name" type="text" value={this.state.first} onChange={this.onInputchange} required />
                <input name="last" placeholder='Last Name' type="text" value={this.state.last} onChange={this.onInputchange} required />
                <input name="email" placeholder='Email' type="text" value={this.state.email} onChange={this.onInputchange} />
                <input name="date" placeholder='Date' type="date" value={this.state.date} onChange={this.onInputchange} />
              <input type='submit'/>
            </form>

       </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { currentUser : state.user }
}

export default connect(mapStateToProps , {updateUser})(Form)
