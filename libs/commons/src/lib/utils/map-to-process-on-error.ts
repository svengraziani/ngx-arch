import { catchError, OperatorFunction, throwError } from "rxjs";
import { Process } from "../interfaces/process";
import { ProcessStatus } from "../interfaces/process-status";

export function mapToProcessOnError<T>(): OperatorFunction<Process<T>, Process<T>> {
    return catchError((error: Error) => throwError(() => ({ status: ProcessStatus.ERRORED, payload: error })));
}