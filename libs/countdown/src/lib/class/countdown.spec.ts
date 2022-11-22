import { fakeAsync, flush, tick } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { Countdown } from './countdown';

describe('Countdown', () => {
  const onComplete = jest.fn();
  it('should create', () => {
    expect(new Countdown({ intervalInSeconds: 50, onComplete })).toBeTruthy();
  });

  it('should count down correctly', fakeAsync(() => {
    const onComplete = jest.fn();
    const countdown = new Countdown({
      intervalInSeconds: 50,
      onComplete,
    });
    const result = subscribeSpyTo(countdown.secondsLeft$);
    countdown.start();

    tick(2_000);

    expect(result.getLastValue()).toBe(48);
    result.unsubscribe();
    flush();
  }));

  it('should stop correctly', fakeAsync(() => {
    const onComplete = jest.fn();
    const countdown = new Countdown({
      intervalInSeconds: 50,
      onComplete,
    });
    const result = subscribeSpyTo(countdown.secondsLeft$);
    countdown.start();
    tick(2_000);
    countdown.stop();
    tick(5_000);
    expect(result.getLastValue()).toBe(50);
    result.unsubscribe();
    flush();
  }));

  it('should trigger onComplete on count down', fakeAsync(() => {
    const onComplete = jest.fn();
    const countdown = new Countdown({ intervalInSeconds: 50, onComplete });
    const result = subscribeSpyTo(countdown.secondsLeft$);
    countdown.start();
    tick(51_000);
    expect(onComplete).toHaveBeenCalled();
    result.unsubscribe();
    flush();
  }));

  it('should not trigger onComplete on count down if stopped', fakeAsync(() => {
    const onComplete = jest.fn();
    const countdown = new Countdown({ intervalInSeconds: 50, onComplete });
    const result = subscribeSpyTo(countdown.secondsLeft$);
    countdown.start();
    tick(5_000);
    countdown.stop();
    tick(51_000);
    expect(onComplete).toBeCalledTimes(0);
    result.unsubscribe();
    flush();
  }));
});
