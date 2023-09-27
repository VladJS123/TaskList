import { Selector } from "reselect";
import { RootState } from "store";
import { Task } from "types/taskList.type";

export const selectTaskListData: Selector<RootState, Task[]> = (state: RootState) => state.tasks.data;
