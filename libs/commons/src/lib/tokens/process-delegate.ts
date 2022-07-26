import { InjectionToken } from "@angular/core";
import { ProcessDelegate } from "../interfaces/process-delegate";

export const NGXA_PROCESS = new InjectionToken<ProcessDelegate<unknown>>("Ngxa process delegate");