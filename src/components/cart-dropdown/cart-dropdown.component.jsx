import { connect } from 'react-redux'
import FormButton from '../form-button/form-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.sass'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <FormButton>Go To Checkout</FormButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)
