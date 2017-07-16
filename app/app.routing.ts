import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { CurrencyListComponent } from "./components/currency-list/currency-list.component";



const routes: Routes = [
    { path: "", redirectTo: "/currency-list", pathMatch: "full" },
    { path: "currency-list", component: CurrencyListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }