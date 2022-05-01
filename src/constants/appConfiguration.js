import {
  BookOutlined,
  ContainerOutlined,
  SettingOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons'
import UserList from '../pages/users/UserList'
import LabelList from '../pages/labels/List'
import BoardDashboard from '../pages/boards/Dashboard'
import TicketList from '../pages/tickets/List'
import { Dashboard } from '../pages/projects/Dashboard'

const ROUTE_CONFIGURATION = [
  {
    title: 'Projects',
    path: 'projects',
    component: Dashboard,
    icon: BookOutlined,
  },
  {
    title: 'Boards',
    path: 'boards',
    component: BoardDashboard,
    icon: BookOutlined,
  },
  {
    title: 'Tickets',
    path: 'tickets',
    component: TicketList,
    icon: ContainerOutlined,
  },
  { title: 'Labels', path: 'labels', component: LabelList, icon: TagOutlined },
  { title: 'Users', path: 'users', component: UserList, icon: UserOutlined },
  {
    title: 'Settings',
    path: 'settings',
    component: UserList,
    icon: SettingOutlined,
  },
]

export { ROUTE_CONFIGURATION }
