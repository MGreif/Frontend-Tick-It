import { combineReducers } from 'redux'
import { projectReducer } from './project.reducer'

export default combineReducers({
    rootState: projectReducer
})