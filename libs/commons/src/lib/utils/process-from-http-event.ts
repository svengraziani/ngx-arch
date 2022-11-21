import { HttpEvent, HttpEventType, HttpUserEvent } from '@angular/common/http';
import { Observable, map, catchError, of, startWith } from 'rxjs';
import { ProcessStatus } from '../interfaces/process-status';
import { completeProcess } from './complete-process';
import { errorProcess } from './error-process';
import { runningProcess } from './running-process';

class ConfigurationException extends Error {}

type ProcessFromHttpEventProps<T> = {
  observable: Observable<HttpEvent<T>>;
};

type OptionalInitialState = {
  initialState?: Record<string, unknown>;
};

type RequiredInitialState = {
  initialState: Record<string, unknown>;
};

const PROCESS_INITIAL_INDICATOR = '_classification';

export function processFromHttpEvent<T>({
  observable,
  initialState,
}: ProcessFromHttpEventProps<T> & OptionalInitialState) {
  if (initialState && typeof initialState === 'object') {
    return processWithInitialStateFromHttpEvent<T>({
      observable,
      initialState,
    });
  } else {
    return observable.pipe(
      map(mapHttpEventToProcess),
      catchError((error: Error) => of(errorProcess(error)))
    );
  }
}

function processWithInitialStateFromHttpEvent<T>({
  observable,
  initialState,
}: ProcessFromHttpEventProps<T> & RequiredInitialState) {
  if (initialState[PROCESS_INITIAL_INDICATOR]) {
    throw new ConfigurationException(
      `is using reserved name "${PROCESS_INITIAL_INDICATOR}"`
    );
  }
  return observable.pipe(
    startWith({
      ...initialState,
      type: HttpEventType.User,
      _classification: ProcessStatus.IDLE,
    } as unknown as HttpUserEvent<T>),
    map(mapHttpEventToProcess),
    catchError((error: Error) => of(errorProcess(error)))
  );
}

function mapHttpEventToProcess<T>(event: HttpEvent<T>) {
  if (event.type === HttpEventType.User) {
    // eslint-disable-next-line no-prototype-builtins
    if (event.hasOwnProperty(PROCESS_INITIAL_INDICATOR)) {
      return {
        status: ProcessStatus.IDLE,
        payload: event as unknown as T,
      };
    }
  }

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
}
