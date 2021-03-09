import { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import SECTIONS_DATA from '../../data/sections.data'
import './directory-menu.style.sass'

export default class DirectoryMenu extends Component {
  constructor() {
    super() 

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return(
      <div className='directory-menu'>
       {
        this.state.sections.map(({id, ...otherProps}) => 
          <MenuItem key={id} {...otherProps} />
        )}
      </div>
      
    )
  }
}