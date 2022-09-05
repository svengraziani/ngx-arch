import { AlertDelegate } from "@ngxarch/commons";
import { map } from "rxjs";
import { DialogContext, DialogService } from '@anglify/components';

import { Injectable } from "@angular/core";
import { AlertDialogComponent } from "./alert-dialog/alert-dialog.component";

export interface Response {
    confirmed: boolean;
}

export interface AlertPayload {
    title: string;
    message: string;
}

export interface Issuer {
    id: string;
}

export type Alert = AlertDelegate<Issuer, AlertPayload, Response>;

@Injectable({providedIn: 'root'})
export class AlertService implements AlertDelegate<Issuer, AlertPayload, Response> {
    
    public alert(payload: AlertPayload, issuer: Issuer) {
        return this._dialogService.open$(AlertDialogComponent, {
            data: {
                title: payload.title,
                message: payload.message,
                id: issuer.id,
            }
        }).pipe(map(dialogResponse => {
            const response = dialogResponse as unknown as DialogContext<Response>;
            return response.data ?? {confirmed: false};
        }));
    }

    public constructor(private readonly _dialogService: DialogService) { }

    
        
}