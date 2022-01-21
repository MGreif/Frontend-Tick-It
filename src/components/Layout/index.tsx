import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout as AntdLayout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { getMenuItemBasedOnUrl } from '../../libs/getMenuItemBasedOnUrl'
import { ROUTE_CONFIGURATION } from '../../constants/appConfiguration'
import { useFetchProjectsByUserId } from '../../hooks/projects/useFetchProjectsByUserId'
import Header from './Header'
import CreateTicket from '../../pages/tickets/CreateTicket'
import CreateLabel from '../../pages/labels/CreateLabel'

const { Content, Footer, Sider } = AntdLayout

function Layout() {
  useFetchProjectsByUserId()

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Menu
          theme="dark"
          defaultSelectedKeys={[getMenuItemBasedOnUrl()]}
          mode="inline"
        >
          {ROUTE_CONFIGURATION.map((config, index) => (
            <Menu.Item key={`${index + 1}`} icon={<config.icon />}>
              <Link title={config.title} to={'/' + config.path}>
                {config.title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntdLayout className="site-layout">
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            {ROUTE_CONFIGURATION.map((config) => (
              <Route
                key={config.title}
                path={'/' + config.path}
                component={config.component}
                exact
              />
            ))}
            <Route path="/tickets/create" component={CreateTicket as any} />
            <Route path="/labels/create" component={CreateLabel as any} />
            <Route path="/" component={() => <span>Home</span>} />
            <Route
              path="*"
              component={() => <span>404 - Path not found</span>}
            />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Tick It - Created By @Mika Greif
        </Footer>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
