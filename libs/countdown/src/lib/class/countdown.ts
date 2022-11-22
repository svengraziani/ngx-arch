import { OperatorFunction, Subject } from 'rxjs';
import {
  ReplaySubject,
  share,
  map,
  tap,
  BehaviorSubject,
  interval,
} from 'rxjs';
import {
  type CountdownState,
  CountdownStateTypes,
} from '../interfaces/countdown.interface';

export class Countdown {
  private readonly state$ = new BehaviorSubject<CountdownState>({
    remainingTime: this.props.intervalInSeconds,
    state: CountdownStateTypes.IDLE,
  });

  private readonly completeEvent$ = new Subject<void>();

  private readonly clock$ = interval(1_000).pipe(this.updateCountdownState());

  public readonly secondsLeft$ = this.clock$.pipe(
    map(() => this.state$.value.remainingTime),
    share({ connector: () => new ReplaySubject(1), resetOnRefCountZero: true })
  );

  public readonly onComplete$ = this.completeEvent$.asObservable();

  public readonly isRunning$ = this.state$.pipe(
    map((state) => state.state === CountdownStateTypes.RUNNING)
  );

  public readonly isStopped$ = this.state$.pipe(
    map((state) => state.state === CountdownStateTypes.STOPPED)
  );

  public constructor(
    public readonly props: { intervalInSeconds: number; onComplete(): void } = {
      intervalInSeconds: 50,
      onComplete: () => null,
    }
  ) {}

  public start() {
    this.state$.next({
      state: CountdownStateTypes.RUNNING,
      remainingTime: this.props.intervalInSeconds,
    });
  }

  public stop() {
    this.state$.next({
      state: CountdownStateTypes.STOPPED,
      remainingTime: this.props.intervalInSeconds,
    });
  }

  private updateCountdownState(): OperatorFunction<number, number> {
    return tap(() => {
      const currentState = this.state$.value;
      if (currentState.state === CountdownStateTypes.RUNNING) {
        if (currentState.remainingTime === 0) {
          this.stop();
          this.props.onComplete();
          this.completeEvent$.next();
        } else {
          this.state$.next({
            state: CountdownStateTypes.RUNNING,
            remainingTime: currentState.remainingTime - 1,
          });
        }
      }
    });
  }
}
