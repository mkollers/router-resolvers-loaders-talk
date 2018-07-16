import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'lazy-loaded',
        loadChildren: './lazy-loaded/lazy-loaded.module#LazyLoadedModule'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }