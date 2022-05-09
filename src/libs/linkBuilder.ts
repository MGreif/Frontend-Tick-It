export const buildApiLink = (url = '') => {
  const host = process.env.REACT_APP_SERVICE_HOST
  const port = process.env.REACT_APP_SERVICE_PORT
  const tickItServicePath = process.env.REACT_APP_SERVICE_PATH || ''
  const apiRootPath = process.env.REACT_APP_API_ROOT_PATH || ''
  return `${host}:${port}${apiRootPath}${tickItServicePath}${url}`
}

export const buildRouterLink = (url = '') => {
  return `${process.env.REACT_APP_FRONTEND_ROOT_PATH || ''}${url}`
}
