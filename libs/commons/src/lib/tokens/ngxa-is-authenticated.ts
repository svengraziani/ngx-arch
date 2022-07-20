import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const NGXA_IS_AUTHENTICATED = new InjectionToken<Observable<boolean>>("NGXA_IS_AUTHENTICATED");