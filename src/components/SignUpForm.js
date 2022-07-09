import React, { Component } from 'react';
import axios from 'axios';
import '../SignUpFormStyling.css';

export default class SignUpForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: ''
      }
    }

    inputHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }

  render() {
    const {userId, title} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div className='signUpForm'>
                <label>Please enter a user ID </label>
                <input type="text" name="userId" value={userId} onChange={this.inputHandler}/>
                <br/>
                <label>Please enter a title </label>
                <input type="text" name="title" value={title} onChange={this.inputHandler}/>
            </div>
            <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
