# Reactive Countdown

Countdown utility. This library is for you whenever you need a reactive countdown or timer.

- [Reactive Countdown](#reactive-countdown)
  - [Usage](#usage)
    - [Start a countdown](#start-a-countdown)
    - [Stop/Reset a countdown](#stopreset-a-countdown)
    - [Properties](#properties)

## Usage

```typescript
// Basic
const countdown = new Countdown({
  intervalInSeconds: 5,
  onComplete: () => {
    // Your code here gets called when the countdown has finished.
    // eg. emit to an Subject
  },
});
```

### Start a countdown

Countdown exposes an observable, as soon as we have a subscriber we can start the countdown.

```typescript
countdown.secondsLeft$.subscribe();
countdown.start();
```

### Stop/Reset a countdown

Stop will reset the countdown to its configured interval in seconds.

```typescript
countdown.stop();
```

### Properties

| Property     | Description                                                                  |     |
| ------------ | ---------------------------------------------------------------------------- | --- |
| secondsLeft$ | As soon as we have a subscriber to this property we can start the countdown. |     |
| onComplete$  | Emits when the countdown completes                                           |     |
| isRunning$   | Observe if the countdown is running                                          |     |
| isStopped$   | Observe if the countdown is stopped                                          |     |
