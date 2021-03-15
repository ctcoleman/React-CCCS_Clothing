import { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import FormButton from '../form-button/form-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in-form.styles.sass'

export default class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    } catch(e) { console.log(e) }

    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-in-form">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <FormButton value="Submit Form" type="submit"> Sign In</FormButton>
            <FormButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</FormButton>
          </div>
        </form>
      </div>
    )
  }
}