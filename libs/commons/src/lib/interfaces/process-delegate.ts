import { Observable } from "rxjs";
export interface ProcessDelegate<ProcessId, ProcessState> {
    selectState(pid: ProcessId): Observable<ProcessState>;
    start<Issuer>(pid: ProcessId, issuer: Issuer): void;
    stop<Issuer>(pid: ProcessId, issuer: Issuer): void;
    kill<Issuer>(pid: ProcessId, issuer: Issuer): void;
}