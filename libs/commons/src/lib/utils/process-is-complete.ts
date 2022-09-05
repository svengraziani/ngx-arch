import { Observable, map } from 'rxjs';
import type { Process } from '../interfaces/process';
import { ProcessStatus } from '../interfaces/process-status';

export function isComplete<T>(process: Observable<Process<T>>): Observable<boolean> {
  return process.pipe(map(({ status }) => status === ProcessStatus.COMPLETED));
}
