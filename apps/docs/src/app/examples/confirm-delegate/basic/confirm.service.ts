import { ConfirmDelegate } from "@ngxarch/commons";
import { map } from "rxjs";
import { DialogContext, DialogService } from '@anglify/components';
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { Injectable } from "@angular/core";

export interface Response {
    confirmed: boolean;
}

export interface ConfirmPayload {
    message: string;
}

export interface Issuer {
    id: string;
}

export type Confirm = ConfirmDelegate<Issuer, ConfirmPayload, Response>;

@Injectable({providedIn: 'root'})
export class ConfirmService implements ConfirmDelegate<Issuer, ConfirmPayload, Response> {

    
    public confirm(payload: ConfirmPayload, issuer: Issuer) {
        return this._dialogService.open$(ConfirmDialogComponent, {
            data: {
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