import './form-button.styles.sass'

const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...otherProps} type="button">
    {children}
  </button>
)

export default FormButton