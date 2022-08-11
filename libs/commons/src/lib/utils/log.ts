import { inject } from "@angular/core";
import { LogDelegate } from "../interfaces/log-delegate";
import { LogLevel } from "../interfaces/log-level";
import { NGXA_LOG } from "../tokens/log-delegate";

export function provideLogger<T>() {
    return inject(NGXA_LOG) as unknown as T;
}

export function logInfo(message: string, logger: LogDelegate<unknown, string, LogLevel>, issuer?: unknown): void {
    return logger.log(message, LogLevel.INFO, issuer);
}

export function logError(message: string, logger: LogDelegate<unknown, string, LogLevel>, issuer?: unknown): void {
    return logger.log(message, LogLevel.ERROR, issuer);
}

export function logWarn(message: string, logger: LogDelegate<unknown, string, LogLevel>, issuer?: unknown): void {
    return logger.log(message, LogLevel.WARN, issuer);
}

export function logFatal(message: string, logger: LogDelegate<unknown, string, LogLevel>, issuer?: unknown): void {
    return logger.log(message, LogLevel.FATAL, issuer);
}

export function logTrace(message: string, logger: LogDelegate<unknown, string, LogLevel>, issuer?: unknown): void {
    return logger.log(message, LogLevel.TRACE, issuer);
}