export const buildApiLink = (url = '') =>
  `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}${
    process.env.REACT_APP_SERVICE_PATH || ''
  }${url}`

export const buildRouterLink = (url = '') => {
  console.log(`${process.env.REACT_APP_SERVICE_PATH || ''}${url}`)
  return `${process.env.REACT_APP_SERVICE_PATH || ''}${url}`
}
