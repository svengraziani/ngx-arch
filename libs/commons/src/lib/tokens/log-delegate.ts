import { InjectionToken } from "@angular/core";
import { LogDelegate } from "../interfaces/log-delegate";

export const NGXA_LOG = new InjectionToken<LogDelegate<unknown, unknown, unknown>>('Ngxa log delegate');
