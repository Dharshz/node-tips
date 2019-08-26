import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppComponent } from "./app.component";
import { HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  bootstrap: [HomeComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule, NativeScriptHttpModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
