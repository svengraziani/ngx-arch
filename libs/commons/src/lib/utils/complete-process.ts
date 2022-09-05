import { Process } from "../interfaces/process";
import { ProcessStatus } from "../interfaces/process-status";


export function completeProcess<T>(payload: T): Process<T> {
  return {
    status: ProcessStatus.COMPLETED,
    payload,
  };
}
