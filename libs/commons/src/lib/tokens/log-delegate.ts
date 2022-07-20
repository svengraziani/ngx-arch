import { InjectionToken } from "@angular/core";
import { LogDelegate } from "../interfaces/log-delegate";

export const LOG = new InjectionToken<LogDelegate>('Ngxa log delegate');