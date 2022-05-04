export const buildApiLink = (url = '') =>
  `${process.env.REACT_APP_SERVICE_HOST}:${process.env.REACT_APP_SERVICE_PORT}${
    process.env.REACT_APP_SERVICE_PATH || ''
  }/api${url}`

export const buildRouterLink = (url = '') => {
  return `${process.env.REACT_APP_SERVICE_PATH || ''}${url}`
}
