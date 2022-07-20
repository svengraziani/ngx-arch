import { LogLevel } from "./log-level";
import { LogEntry } from "./log-entry";

export interface LogDelegate {
    log<Issuer>(message: LogEntry, level: LogLevel, issuer?: Issuer): void;
}