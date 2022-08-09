import { InjectionToken } from "@angular/core";
import { LogHandler } from "./log-handler.interface";

export const LOG_HANDLER = new InjectionToken<LogHandler>('');