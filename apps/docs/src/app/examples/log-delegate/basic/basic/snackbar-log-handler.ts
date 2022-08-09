import { SnackbarService } from "@anglify/components";
import { Injectable } from "@angular/core";
import { LogDelegate, LogLevel } from "@ngxarch/commons";

@Injectable()
export class SnackbarLogHandler implements LogDelegate<unknown, string, LogLevel> {

    public constructor(
        private _snackbar: SnackbarService
    ) {}

    public log(message: string, level: LogLevel): void {
        
        const logMessage = `[${level}] ${message}`;
        switch (level) {
            case LogLevel.INFO:
                this._snackbar.open({data: {label: logMessage}, timeout: 3000, position: "leading"});
                break;
            case LogLevel.ERROR:
                this._snackbar.open({data: {label: logMessage, actions: {"label": "OK"}}, timeout: 0, position: "center"});
                break;
            case LogLevel.WARN:
                this._snackbar.open({data: {label: logMessage}});
                break;
        }
    }

}