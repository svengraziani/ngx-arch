import { InjectionToken } from "@angular/core";
import { AlertDelegate } from "../interfaces/alert-delegate";

export const ALERT = new InjectionToken<AlertDelegate<unknown, unknown, unknown>>('Ngxa alert delegate');