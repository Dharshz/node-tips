import { HomeComponent } from "./components/home/home.component";
import { TipComponent } from "./components/tip/tip.component";

export const appRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "tip", component: TipComponent }
];

export const appComponents: any = [
    HomeComponent,
    TipComponent
];