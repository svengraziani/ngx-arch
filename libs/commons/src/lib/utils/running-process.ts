import { Process } from "../interfaces/process";
import { ProcessStatus } from "../interfaces/process-status";


export function runningProcess<T>(payload: T): Process<T> {
  return {
    status: ProcessStatus.RUNNING,
    payload,
  };
}
