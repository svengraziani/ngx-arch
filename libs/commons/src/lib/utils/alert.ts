import { inject } from "@angular/core";
import { NGXA_ALERT } from "../tokens/alert-delegate";

export function provideAlert<T>() {
    return inject(NGXA_ALERT) as unknown as T;
}