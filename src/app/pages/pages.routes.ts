import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";


const pagesRoutes: Routes = [ 
    { 
        path: '',
        component: PagesComponent,
        //Lo siguiente son las rutas que van a trabajar desde el pagecomponent
        //es decir, desde el <router-outlet> que esta en pagecompenent
        children :[
            { path: 'dashboard', component:DashboardComponent },
            { path: 'progress', component: ProgressComponent } ,
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

//El forRoot se va a usar cuando es la ruta principal, pero como estas son rutas
//que estan dentro de otras rutas (o mejor dicho son router outlets que estan dentro de ontransitionstart
//router outlets) por eso vamos a usar el forChild.
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );