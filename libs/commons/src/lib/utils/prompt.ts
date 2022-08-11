import { inject } from "@angular/core";
import { NGXA_PROMPT } from "../tokens/prompt-delegate";

export function providePrompt<T>(){
    return inject(NGXA_PROMPT) as unknown as T;
}