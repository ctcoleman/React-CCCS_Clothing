import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

import './sign-in-page.styles.sass'

const SignInPage = () => (
  <div className='sign-in-page'>
    <SignInForm />
    <SignUpForm />
  </div>
)

export default SignInPage