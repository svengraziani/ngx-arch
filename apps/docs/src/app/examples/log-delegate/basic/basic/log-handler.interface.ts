import { LogLevel } from "@ngxarch/commons";

export interface LogHandler {
    log(message: string, level: LogLevel, issuer?: unknown): void;
  }
  