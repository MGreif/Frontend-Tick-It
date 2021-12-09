import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import { Layout as AntdLayout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { getMenuItemBasedOnUrl } from '../libs/getMenuItemBasedOnUrl';
import { ROUTE_CONFIGURATION } from '../constants/appConfiguration';
import { useFetchProjectsByUserId } from '../redux/hooks';

const { Header, Content, Footer, Sider } = AntdLayout;

function Layout() {
  useFetchProjectsByUserId()
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider collapsible >
        <Menu theme="dark" defaultSelectedKeys={[getMenuItemBasedOnUrl()]} mode="inline">
          {
            ROUTE_CONFIGURATION.map((config, index) => <Menu.Item key={`${index + 1}`} icon={<config.icon />}>
              <Link title={config.title} to={'/' + config.path}>{config.title}</Link>
            </Menu.Item>
            )}
        </Menu>
      </Sider>
      <AntdLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            {
              ROUTE_CONFIGURATION.map(config => <Route key={config.title} path={'/' + config.path} element={<config.component />} />
              )}
            <Route path="/" element={<span>Home</span>} />
            <Route path="*" element={<span>404 - Path not found</span>} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Tick It - Created By @Mika Greif</Footer>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
