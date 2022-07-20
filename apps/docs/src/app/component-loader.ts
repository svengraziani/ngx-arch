import { Injectable, Type } from "@angular/core";
import { ComponentProvider } from "@ngxarch/code-example";
import { defer, map, Observable } from "rxjs";

@Injectable()
export class ComponentLoader implements ComponentProvider {

    public loadComponent(component: string, example: string): Observable<{ default: Type<unknown> }> {
        return defer(() => this._resolveImport(component, example)).pipe(
            map(result => {
                return { default: result };
            })
        );
    }

    private async _resolveImport(component: string, example: string) {
        return await import(`./examples/${component}/${example}/${example}.component`) as Type<unknown>;
    }
    

}