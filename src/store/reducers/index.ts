import {combineReducers} from 'redux'
import { dataReducer } from './dataReducers'



export const rootReducer = combineReducers({
    flightData: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>