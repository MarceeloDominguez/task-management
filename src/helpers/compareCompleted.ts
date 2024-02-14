import { ISubTask } from "../interface/subtask";

export const compareCompleted = (a: ISubTask, b: ISubTask) => {
  if (a.done === b.done) {
    return 0;
  } else if (a.done) {
    return 1;
  } else {
    return -1;
  }
};
