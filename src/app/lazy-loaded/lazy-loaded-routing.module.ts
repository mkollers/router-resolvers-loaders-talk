import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadedComponent } from './lazy-loaded.component';
import { LanguagesResolver } from './languages-resolver';

const routes: Routes = [{
  path: '', component: LazyLoadedComponent, resolve: { languages: LanguagesResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
