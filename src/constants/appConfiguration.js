import { BookOutlined, SettingOutlined, TagOutlined, UserOutlined } from '@ant-design/icons'
import UserList from '../pages/users/UserList';
import LabelList from '../pages/labels/LabelList';


const ROUTE_CONFIGURATION = [
  { title: "Boards", path: "boards", component: UserList, icon:  BookOutlined },
  { title: "Users", path: "users", component: UserList, icon: UserOutlined },
  { title: "Labels", path: "labels", component: LabelList, icon: TagOutlined },
  { title: "Settings", path: "settings", component: UserList, icon: SettingOutlined},
]

export { ROUTE_CONFIGURATION }
