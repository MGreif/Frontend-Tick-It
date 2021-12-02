import { ROUTE_CONFIGURATION } from "../constants/appConfiguration"

export function getMenuItemBasedOnUrl () : string {
    const url = window.location.href
    const serviceHost = process.env.REACT_APP_SERVICE_HOST
    const servicePort = process.env.REACT_APP_SERVICE_PORT
    const currentPath = url.replace(`http://${serviceHost}:${servicePort}`, '')

    const match = ROUTE_CONFIGURATION.find(config => currentPath.startsWith('/' + config.path))
    console.log(match)
    if (!match) return '1'
    const index = ROUTE_CONFIGURATION.map(config => config.path).indexOf(match.path)
    return `${index + 1}`
  }