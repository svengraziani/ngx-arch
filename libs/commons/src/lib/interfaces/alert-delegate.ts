import { Observable } from "rxjs";

export interface AlertDelegate {
    alert<Issuer, Payload, Response>(payload: Payload, issuer: Issuer): Observable<Response>;
}