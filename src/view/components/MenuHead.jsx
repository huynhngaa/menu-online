
import { useState } from 'react'
import { Flex, Menu } from 'antd';

function MenuHead() {
  const [count, setCount] = useState(0)
  const items = Array.from({ length: 3 }).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));
  return (
    <>
    <div className="demo-logo" />
<Menu
  theme="dark"
  mode="horizontal"
  defaultSelectedKeys={['2']}
  items={items}
  style={{ flex: 1, minWidth: 0 }}
/>

    </>
  )
}

export default MenuHead
