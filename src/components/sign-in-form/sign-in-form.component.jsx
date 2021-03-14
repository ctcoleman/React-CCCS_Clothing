import { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import FormButton from '../form-button/form-button.component'
import './sign-in-form.styles.sass'

export default class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()

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

          <FormButton value="Submit Form" type="submit"> Sign In</FormButton>
        </form>
      </div>
    )
  }
}