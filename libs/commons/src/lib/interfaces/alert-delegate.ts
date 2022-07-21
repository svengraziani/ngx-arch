import { Observable } from "rxjs";

export interface AlertDelegate<Issuer, Payload, Response> {
    alert(payload: Payload, issuer: Issuer): Observable<Response>;
}