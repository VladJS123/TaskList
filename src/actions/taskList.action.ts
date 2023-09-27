import {
  ClearAllTasksAction,
  CreateTaskAction,
  EditDescriptionAction,
  RemoveTaskAction
} from "./interfaces/taskList.interfaces";

import { TasksListTypes } from "./actionTypes/taskList.type";
import { Task } from "types/taskList.type";

export const createTask = (data: Task): CreateTaskAction => ({
  data,
  type: TasksListTypes.CREATE_TASK
});

export const removeTask = (id: string): RemoveTaskAction => ({
  id,
  type: TasksListTypes.DELETE_TASK
});

export const editDescription = (data: { id: string; description: string }): EditDescriptionAction => ({
  data,
  type: TasksListTypes.EDIT_DESCRIPTION
});

export const clearAllTasks = (data: []): ClearAllTasksAction => ({
  data,
  type: TasksListTypes.CLEAR_ALL_TASKS
});
