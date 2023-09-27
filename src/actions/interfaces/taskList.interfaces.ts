import { Action } from "redux";
import { TasksListTypes } from "../actionTypes/taskList.type";
import { Task } from "types/taskList.type";

export interface CreateTaskAction extends Action {
  type: typeof TasksListTypes.CREATE_TASK;
  data: Task;
}

export interface ClearAllTasksAction extends Action {
  type: typeof TasksListTypes.CLEAR_ALL_TASKS;
  data: [];
}

export interface EditDescriptionAction extends Action {
  type: typeof TasksListTypes.EDIT_DESCRIPTION;
  data: { id: string; description: string };
}

export interface RemoveTaskAction extends Action {
  type: typeof TasksListTypes.DELETE_TASK;
  id: string;
}

export type TaskListActionTypes = CreateTaskAction | RemoveTaskAction | ClearAllTasksAction | EditDescriptionAction;
