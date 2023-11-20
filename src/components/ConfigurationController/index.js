import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const onChangeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      return (
        <div className="configuration_container">
          <h1 className="layout_heading">Layout</h1>
          <div className="checkBox_container">
            <input
              type="checkbox"
              id="content"
              className="checkbox"
              onChange={onChangeContent}
              checked={showContent}
            />
            <label htmlFor="content" className="label_text">
              Content
            </label>
          </div>
          <div className="checkBox_container">
            <input
              type="checkbox"
              id="Left Navbar"
              className="checkbox"
              checked={showLeftNavbar}
              onChange={onChangeLeftNav}
            />
            <label htmlFor="Left Navbar" className="label_text">
              Left Navbar
            </label>
          </div>
          <div className="checkBox_container">
            <input
              type="checkbox"
              id="Right Navbar"
              className="checkbox"
              checked={showRightNavbar}
              onChange={onChangeRightNav}
            />
            <label htmlFor="Right Navbar" className="label_text">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext>
)

export default ConfigurationController
