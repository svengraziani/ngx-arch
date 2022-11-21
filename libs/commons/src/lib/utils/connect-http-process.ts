import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { completeProcess } from './complete-process';
import { mapErrorToProcess } from '../interfaces/map-error-to-process';
import { Process } from '../interfaces/process';
import { ProcessStatus } from '../interfaces/process-status';
import { runningProcess } from './running-process';

/**
 * @param observable
 * @deprecated Use `processFromHttpEvent` instead.
 * @returns
 */
export function connectHttpProcess<T>(
  observable: Observable<HttpEvent<T>>
): Observable<Process<T | Error>> {
  return observable.pipe(
    map((event: HttpEvent<T>) => {
      if (event.type === HttpEventType.Response) {
        if (event.body) {
          return completeProcess(event.body);
        }
      }

      if (event.type === HttpEventType.Sent) {
        return runningProcess([] as unknown as T);
      }

      return {
        status: ProcessStatus.IDLE,
        payload: [] as unknown as T,
      };
    }),
    mapErrorToProcess()
  );
}
