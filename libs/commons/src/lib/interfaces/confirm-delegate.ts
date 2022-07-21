import { Observable } from "rxjs";

export interface ConfirmDelegate<Issuer, Payload, Response> {
    confirm(payload: Payload, issuer: Issuer): Observable<Response>;
}