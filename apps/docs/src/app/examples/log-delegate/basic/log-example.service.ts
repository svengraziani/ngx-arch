import { Inject, Injectable } from "@angular/core";
import { LogDelegate, LogLevel } from "@ngxarch/commons";
import { LOG_HANDLER } from "./log-handler.token";

@Injectable()
export class LogExampleService implements LogDelegate<unknown, string, LogLevel>{

    public constructor(
        @Inject(LOG_HANDLER) private _handlers:  LogDelegate<unknown, string, LogLevel>[]
    ) {}

    public log(message: string, level: LogLevel, issuer?: unknown): void {
        this._handlers.forEach(handler => handler.log(message, level, issuer));
    }

}