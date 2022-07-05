import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tableDataReducer from './reducer/tableData';



const rootReducer = combineReducers({
    tableDataReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
