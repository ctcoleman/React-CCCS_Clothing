import './form-button.styles.sass'

const FormButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`
    ${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}form-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default FormButton