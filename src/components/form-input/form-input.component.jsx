import './form-input.styles.sass'

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <div className="group">
    <input className='form-input' onChnage={handleChange} {...otherProps} />
    {
      label ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
      : null
    }
  </div>
)

export default FormInput