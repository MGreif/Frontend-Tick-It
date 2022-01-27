import { createStore } from 'redux'
import { initialState } from './project.reducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }