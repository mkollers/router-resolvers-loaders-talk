import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent {
  languages: any;

  constructor(route: ActivatedRoute) {
    this.languages = route.snapshot.data.languages as any[];
  }
}
