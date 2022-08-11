import { Observable } from "rxjs";

export interface PromptDelegate<Response, Payload, Issuer> {
    prompt(issuer: Issuer, payload?: Payload): Observable<Response>;
}