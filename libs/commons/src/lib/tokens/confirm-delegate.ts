import { InjectionToken } from "@angular/core";
import { ConfirmDelegate } from "../interfaces/confirm-delegate";

export const CONFIRM = new InjectionToken<ConfirmDelegate>('Ngxa confirm delegate');