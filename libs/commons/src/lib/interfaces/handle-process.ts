import { Observable } from "rxjs";
import { mapToProcessComplete } from "./map-to-process-on-complete";
import { mapToProcessOnError } from "./map-to-process-on-error";
import { Process } from "./process";

export function handleProcess<T>(observable: Observable<any>): Observable<Process<T | Error>> {
    return observable.pipe(mapToProcessComplete<T>(), mapToProcessOnError());
  }