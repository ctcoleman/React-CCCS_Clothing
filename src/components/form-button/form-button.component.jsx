import './form-button.styles.sass'

const FormButton = ({ children, ...otherProps }) => (
  <button className="form-button" {...otherProps}>
    {children}
  </button>
)

export default FormButton