import { Component, OnInit } from '@angular/core';
import { LanguagesService } from './languages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent {
  languages$: Observable<any>;

  constructor(languagesService: LanguagesService) {
    this.languages$ = languagesService.getAll();
  }
}
