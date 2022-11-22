export enum CountdownStateTypes {
  IDLE = 'idle',
  RUNNING = 'running',
  STOPPED = 'stopped',
}

export type CountdownState = {
  remainingTime: number;
  state: CountdownStateTypes;
};
