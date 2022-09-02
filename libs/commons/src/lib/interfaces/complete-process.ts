import { Process } from "./process";
import { ProcessStatus } from "./process-status";


export function completeProcess<T>(payload: T): Process<T> {
  return {
    status: ProcessStatus.COMPLETED,
    payload,
  };
}
