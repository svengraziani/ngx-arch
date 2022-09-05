import { Observable } from "rxjs";
import { ProcessStatus } from "./process-status";

export interface ProcessDelegate<ProcessId, Issuer> {
    selectState(pid: ProcessId): Observable<ProcessStatus>;
    start<Issuer>(pid: ProcessId, issuer: Issuer): void;
    stop<Issuer>(pid: ProcessId, issuer: Issuer): void;
    kill<Issuer>(pid: ProcessId, issuer: Issuer): void;
}