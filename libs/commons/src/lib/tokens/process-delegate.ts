import { InjectionToken } from "@angular/core";
import { ProcessDelegate } from "../interfaces/process-delegate";

export const PROCESS = new InjectionToken<ProcessDelegate>("Ngxa process delegate");