import { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import FormButton from '../form-button/form-button.component'
import { auth, createUserDoc } from '../../firebase/firebase.utils'

import './sign-up-form.styles.sass'

export default class SignUpForm extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    
    if(password !== confirmPassword) {
      alert('check passwords')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserDoc(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(e) { console.log(e)}
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an acocunt</h2>
        <span>Sign Up with your email today</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label='Email'
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label='Password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required
            />
          <FormInput
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <FormButton type='submit'>SIGN UP NOW</FormButton>
        </form>
      </div>
    )
  }
}