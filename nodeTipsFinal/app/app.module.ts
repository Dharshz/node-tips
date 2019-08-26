import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent} from "./components/home/home.component";
import { appRoutes, appComponents } from "./app.routes";

@NgModule({
  declarations: [AppComponent, ...appComponents],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, 
            NativeScriptFormsModule, 
            NativeScriptHttpModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(appRoutes)
            ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
