import { InjectionToken } from "@angular/core";
import { PromptDelegate } from "../interfaces/prompt-delegate";

export const NGXA_PROMPT = new InjectionToken<PromptDelegate<unknown, unknown, unknown>>("Ngxa prompt delegate");