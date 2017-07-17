import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { DetailComponent } from "./page/detail/detail.component";



const routes: Routes = [
    { path: "", redirectTo: "/currency-list", pathMatch: "full" },
    { path: "currency-list", component: HomeComponent },
    { path: "currency/:code", component: DetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }