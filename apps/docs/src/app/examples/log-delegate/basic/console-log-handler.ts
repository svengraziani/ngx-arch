import { Injectable } from "@angular/core";
import { LogLevel } from "@ngxarch/commons";

@Injectable()
export class LogConsoleHandler {
    public log(message: string, level: LogLevel, issuer?: unknown): void {
        let issuerName = "unknown";
        if (typeof issuer === "object" && issuer) {
            issuerName = issuer.constructor.name;
        }

        const logMessage = `${new Date().toISOString()} [${level}] ${message} ${issuerName}`;
        switch (level) {
            case LogLevel.INFO:
                // eslint-disable-next-line no-restricted-syntax
                console.info(logMessage);
                break;
            case LogLevel.ERROR:
                console.error(message);
                break;
            case LogLevel.WARN:
                console.warn(message);
                break;
            case LogLevel.FATAL:
                console.error(message);
                alert(logMessage);
                break;
            case LogLevel.TRACE:
                // eslint-disable-next-line no-restricted-syntax
                console.trace(message);
                break;
        }
    }

}