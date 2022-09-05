import { Observable, map } from 'rxjs';
import type { Process } from '../interfaces/process';
import { ProcessStatus } from '../interfaces/process-status';

export function hadError<T>(process: Observable<Process<T>>): Observable<boolean> {
  return process.pipe(
    map(process => {
      if (process.status === ProcessStatus.ERRORED) {
        return true;
      }
      return false;
    })
  );
}
