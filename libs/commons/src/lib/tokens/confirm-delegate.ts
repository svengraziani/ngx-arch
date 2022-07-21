import { InjectionToken } from "@angular/core";
import { ConfirmDelegate } from "../interfaces/confirm-delegate";

export const CONFIRM = new InjectionToken<ConfirmDelegate<unknown, unknown, unknown>>('Ngxa confirm delegate');