import type { ProcessStatus } from './process-status';

export interface Process<T> {
  readonly status: ProcessStatus;
  readonly payload?: T;
}
