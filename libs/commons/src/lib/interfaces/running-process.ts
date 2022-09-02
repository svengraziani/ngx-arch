import { Process } from "./process";
import { ProcessStatus } from "./process-status";


export function runningProcess<T>(payload: T): Process<T> {
  return {
    status: ProcessStatus.RUNNING,
    payload,
  };
}
