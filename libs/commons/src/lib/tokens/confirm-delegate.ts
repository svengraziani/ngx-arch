import { InjectionToken } from "@angular/core";
import { ConfirmDelegate } from "../interfaces/confirm-delegate";

export const NGXA_CONFIRM = new InjectionToken<ConfirmDelegate<unknown, unknown, unknown>>('Ngxa confirm delegate');