import { Observable } from "rxjs";
import { ProcessId } from "./process-id";
import { ProcessStatus } from "./process-status";

export interface ProcessDelegate {
    selectState(pid: ProcessId): Observable<ProcessStatus>;
    start<Issuer>(pid: ProcessId, issuer: Issuer): void;
    stop<Issuer>(pid: ProcessId, issuer: Issuer): void;
    kill<Issuer>(pid: ProcessId, issuer: Issuer): void;
}