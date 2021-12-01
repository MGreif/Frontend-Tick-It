import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { getMenuItemBasedOnUrl } from './libs/getMenuItemBasedOnUrl';
import { ROUTE_CONFIGURATION } from './constants/appConfiguration';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible >
          <Menu theme="dark" defaultSelectedKeys={[getMenuItemBasedOnUrl()]} mode="inline">
            {
              ROUTE_CONFIGURATION.map((config, index) => <Menu.Item key={(index + 1).toString()} icon={<config.icon />}>
                <Link title={config.title} to={'/' + config.path}>{config.title}</Link>
              </Menu.Item>
              )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              {
                ROUTE_CONFIGURATION.map(config => <Route path={'/' + config.path} element={<config.component />} />
                )}
              <Route path="*" element={<span>404 - Path not found</span>} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tick It - Created By @Mika Greif</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
