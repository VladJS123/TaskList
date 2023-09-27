import { combineReducers, createStore } from "redux";
import { taskListReducer } from "reducers/taskList.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({ tasks: taskListReducer });

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
