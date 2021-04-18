import React, { useState } from "react"

const Tab = ({ label, onClick: selectTab, activeTab }) => {
  const onClick = () => { selectTab(label) }
  const className = activeTab === label ? 'tab-list-item tab-item-active' : 'tab-list-item';

  return <li className={className} onClick={onClick} >
    {label}
  </li>
}

const Tabs = ({ children, initialTab, onClick }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  const selectTab = (label) => {
    setActiveTab(label)
  }

  return <div className="tabs">
    <ul className="tab-list">
      {children.map((child) => {
        const { label } = child.props;
        return <Tab
          activeTab={activeTab}
          key={label}
          label={label}
          onClick={selectTab}
        />
      })}
    </ul>
    <div className="tab-content">
      {children.map((child) => (child.props.label === activeTab) ? child : null)}
    </div>
  </div>
}

export default Tabs