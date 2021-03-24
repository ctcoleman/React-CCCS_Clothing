import FormButton from '../form-button/form-button.component'
import './cart-dropdown.styles.sass'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <FormButton>Go To Checkout</FormButton>
  </div>
)

export default CartDropdown
