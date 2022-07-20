import { Observable } from "rxjs";

export interface ConfirmDelegate {
    confirm<Issuer, Payload, Response>(payload: Payload, issuer: Issuer): Observable<Response>;
}