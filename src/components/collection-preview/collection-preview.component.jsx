import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.style.sass'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, index) => index < 3)
          .map(({id, ...otherProps}) => (
            <CollectionItem key={id} {...otherProps} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview
