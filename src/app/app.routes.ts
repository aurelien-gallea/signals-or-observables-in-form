import { Routes } from '@angular/router';
import { FormWithSignalsComponent } from './features/form-with-signals/form-with-signals.component';
import { FormWithObservablesComponent } from './features/form-with-observables/form-with-observables.component';
import { HomePageComponent } from './features/home-page/home-page.component';

export const routes: Routes = [
    {
        title: "Form with Signals",
        path: "form-with-signals",
        component: FormWithSignalsComponent
    },
    {
        title: "Form with Observables",
        path: "form-with-observables",
        component: FormWithObservablesComponent
    },
    {
        title: "Home",
        path: "",
        component: HomePageComponent
    }
];
