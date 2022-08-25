import { Observable } from "rxjs";

export interface PromptDelegate<Response, Payload, Issuer> {
    prompt(payload?: Payload, issuer?: Issuer): Observable<Response>;
}