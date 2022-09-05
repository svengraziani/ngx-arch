import { OperatorFunction, map } from "rxjs";
import { Process } from "../interfaces/process";
import { ProcessStatus } from "../interfaces/process-status";

export function mapToProcessComplete<T>(): OperatorFunction<T, Process<T>> {
    return map(result => ({ status: ProcessStatus.COMPLETED, payload: result }));
  }