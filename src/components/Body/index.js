import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const a = 0

  const renderLeftNavBar = () => {
    const b = 0

    return (
      <div className="right_navbar_container">
        <h1 className="heading_rightNav">Left Navbar Menu</h1>
        <ul className="left_navBar_unorderList-container">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    )
  }

  const renderRightNavBar = () => {
    const b = 0

    return (
      <div className="right_navbar_container">
        <h1 className="heading_rightNav">Right Navbar</h1>
        <div className="add_container">
          <p>Ad 1</p>
        </div>
        <div className="add_container">
          <p>Ad 2</p>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    const c = 0

    return (
      <div className="content_navbar_container">
        <h1 className="heading_rightNav">Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    )
  }

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body_container">
            {showLeftNavbar && renderLeftNavBar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavBar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
