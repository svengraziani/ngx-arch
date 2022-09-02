import { OperatorFunction, catchError, of } from "rxjs";
import { Process } from "./process";
import { ProcessStatus } from "./process-status";


export function mapErrorToProcess<T>(): OperatorFunction<Process<T | Error>, Process<T | Error>> {
  return catchError((error: Error) =>
    of({
      status: ProcessStatus.ERRORED,
      payload: error,
    })
  );
}
