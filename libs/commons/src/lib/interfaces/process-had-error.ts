import { Observable, map, catchError, of } from "rxjs";
import { Process } from "./process";

export function hadError<T>(process: Observable<Process<T>>): Observable<boolean> {
    return process.pipe(
      map(() => false),
      catchError(() => of(true))
    );
}