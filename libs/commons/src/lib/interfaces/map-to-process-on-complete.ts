import { OperatorFunction, map } from "rxjs";
import { Process } from "./process";
import { ProcessStatus } from "./process-status";

export function mapToProcessComplete<T>(): OperatorFunction<T, Process<T>> {
    return map(result => ({ status: ProcessStatus.COMPLETED, payload: result }));
  }