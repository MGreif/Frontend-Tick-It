
const path = "/tick-it"

export const buildApiLink = (url = '') => {
  const host = import.meta.env.VITE_SERVICE_HOST
  const port = import.meta.env.VITE_SERVICE_PORT
  const tickItServicePath = import.meta.env.REACT_APP_SERVICE_PATH || ''
  const apiRootPath = import.meta.env.REACT_APP_API_ROOT_PATH || ''
  return `${host}:${port}${apiRootPath}${tickItServicePath}${url}`
}

export const buildRouterLink = (url = '') => {
  return `${import.meta.env.REACT_APP_FRONTEND_ROOT_PATH || ''}${url}`
}
