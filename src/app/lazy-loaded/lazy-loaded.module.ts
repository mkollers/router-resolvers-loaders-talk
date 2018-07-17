import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguagesResolver } from './languages-resolver';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyLoadedComponent } from './lazy-loaded.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ],
  declarations: [LazyLoadedComponent],
  providers: [
    LanguagesResolver
  ]
})
export class LazyLoadedModule { }
