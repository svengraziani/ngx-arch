import { Observable, map } from 'rxjs';
import type { Process } from './process';
import { ProcessStatus } from './process-status';

export function isRunning<T>(process: Observable<Process<T>>): Observable<boolean> {
  return process.pipe(map(({ status }) => status === ProcessStatus.RUNNING));
}
