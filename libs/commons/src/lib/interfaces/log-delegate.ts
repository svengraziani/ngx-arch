export interface LogDelegate<Issuer, LogEntry, LogLevel> {
    log(message: LogEntry, level: LogLevel, issuer?: Issuer): void;
}