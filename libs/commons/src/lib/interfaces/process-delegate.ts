import { Observable } from "rxjs";
import { ProcessId } from "./process-id";
import { ProcessState } from "./process-state";

export interface ProcessDelegate {
    selectState(pid: ProcessId): Observable<ProcessState>;
    start<Issuer>(pid: ProcessId, issuer: Issuer): void;
    stop<Issuer>(pid: ProcessId, issuer: Issuer): void;
    kill<Issuer>(pid: ProcessId, issuer: Issuer): void;
}