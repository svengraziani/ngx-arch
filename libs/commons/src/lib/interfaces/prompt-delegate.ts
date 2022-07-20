import { Observable } from "rxjs";

export interface PromptDelegate {
    prompt<Issuer, Payload, Response>(issuer: Issuer, payload?: Payload): Observable<Response>;
}