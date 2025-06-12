import { useState } from 'react'
import { Flex, Layout } from 'antd';
import MenuHead from './view/components/MenuHead';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  height:'100%'
  // borderRadius: 8,
  // overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <MenuHead></MenuHead>
      </Header>
      <Content style={contentStyle}>

      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    </>
  )
}

export default App
