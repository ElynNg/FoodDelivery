import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illum magnam voluptatum esse libero iure accusamus blanditiis ullam id doloribus deleniti quasi inventore, eaque odit provident. In sequi fuga delectus!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div className="explore-menu-list-item">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
