import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import Layout from './components/Layout'
import { useCookies } from 'react-cookie'
import * as jwt from 'jsonwebtoken'
import { useSetUser } from './hooks/users/useSetUser'

function App() {
  const [cookies]: any = useCookies()
  const setUser = useSetUser()
  // const { search } = useLocation()

  const token = cookies.token

  console.log(token)

  if (
    !token &&
    !new URLSearchParams(window.location.search).get('redirect_to')
  ) {
    document.location.href =
      process.env.REACT_APP_STANDALONE_ROOT_PATH +
      '/login?redirect_to=' +
      document.location
  } else {
    const user = jwt.decode(token)
    console.log('user', user)
    setUser(user)
  }

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
