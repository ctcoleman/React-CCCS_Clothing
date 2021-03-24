import { connect } from 'react-redux'
import FormButton from '../form-button/form-button.component'
import { addItem } from '../../redux/cart/cart.actions'
import './collection-item.style.sass'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <FormButton onClick={() => addItem(item)} inverted>Add to Cart</FormButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)