import { InjectionToken } from "@angular/core";
import { PromptDelegate } from "../interfaces/prompt-delegate";

export const PROMPT = new InjectionToken<PromptDelegate>("Ngxa prompt delegate");