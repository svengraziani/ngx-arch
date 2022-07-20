import { inject, Injectable, InjectionToken } from "@angular/core";
import { Subject, startWith, shareReplay, Observable } from "rxjs";

/**
 * Fake Auth Service
 */
 @Injectable()
 export class FakeAuthService {
   private _changeAuthState = new Subject<boolean>();
   private readonly _authState = this._changeAuthState.asObservable()
   .pipe(
     startWith(false),
     shareReplay({refCount: true, bufferSize: 1})
   );
   public readonly isAuthenticated$ = this._authState;
 
   public login() {
     this._changeAuthState.next(true);
   }
 
   public logout() {
     this._changeAuthState.next(false);
   }
 }
 /**
  * Token to provide NGXA_IS_AUTHENTICATED interface
  */
 export const FakeAuthState = new InjectionToken<Observable<boolean>>('', {
   factory: () => inject(FakeAuthService).isAuthenticated$
 })