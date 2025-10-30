import { legacy_createStore as createStore, combineReducers } from 'redux'

import { systemReducer } from './reducers/system.reducer.ts'

const rootReducer = combineReducers({
  systemModule: systemReducer,
})

export const store = createStore(rootReducer, undefined)

export type RootState = ReturnType<typeof rootReducer>
