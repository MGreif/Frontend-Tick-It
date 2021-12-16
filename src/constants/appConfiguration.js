import { BookOutlined, ContainerOutlined, SettingOutlined, TagOutlined, UserOutlined } from '@ant-design/icons'
import UserList from '../pages/users/UserList';
import LabelList from '../pages/labels/List';
import BoardDashboard from '../pages/boards/Dashboard';
import TicketList from '../pages/tickets/List';

const ROUTE_CONFIGURATION = [
  { title: "Projects", path: "projects", component: BoardDashboard, icon:  BookOutlined },
  { title: "Tickets", path: "tickets", component: TicketList, icon: ContainerOutlined},
  { title: "Labels", path: "labels", component: LabelList, icon: TagOutlined },
  { title: "Users", path: "users", component: UserList, icon: UserOutlined },
  { title: "Settings", path: "settings", component: UserList, icon: SettingOutlined},
]

export { ROUTE_CONFIGURATION }
