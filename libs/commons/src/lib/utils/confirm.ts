import { inject } from "@angular/core";
import { NGXA_CONFIRM } from "../tokens/confirm-delegate";

export function provideConfirm<T>() {
    return inject(NGXA_CONFIRM) as unknown as T;
}