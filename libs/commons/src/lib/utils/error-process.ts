import { Process } from '../interfaces/process';
import { ProcessStatus } from '../interfaces/process-status';

export function errorProcess<T>(error: T): Process<T> {
  return {
    status: ProcessStatus.ERRORED,
    payload: error,
  };
}
