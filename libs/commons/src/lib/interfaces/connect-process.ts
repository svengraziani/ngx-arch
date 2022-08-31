import { Observable, of, switchMap } from "rxjs";
import { handleProcess } from "./handle-process";
import { Process } from "./process";
import { ProcessStatus } from "./process-status";

export function connectProcess<T>(
    observable: Observable<T>,
    initial: Process<T> = { status: ProcessStatus.RUNNING, payload: [] as unknown as T }
  ): Observable<Process<T | Error>> {
    return of(initial).pipe(switchMap(() => handleProcess<T>(observable)));
  }