import { Reducer } from "redux";

import { Task } from "types/taskList.type";
import { TaskListActionTypes } from "actions/interfaces/taskList.interfaces";
import { TasksListTypes } from "actions/actionTypes/taskList.type";

interface TaskListReduxProps {
  data: Task[];
}

export const defaultState: TaskListReduxProps = {
  data: []
};

export const taskListReducer: Reducer<TaskListReduxProps, TaskListActionTypes> = (state = defaultState, action) => {
  switch (action.type) {
    case TasksListTypes.CREATE_TASK:
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case TasksListTypes.DELETE_TASK:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id)
      };
    case TasksListTypes.EDIT_DESCRIPTION:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                description: action.data.description
              }
            : item
        )
      };
    case TasksListTypes.CLEAR_ALL_TASKS:
      return {
        ...state,
        data: action.data
      };

    default:
  }

  return state;
};
