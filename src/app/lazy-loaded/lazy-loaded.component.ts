import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent {
  languages$: Observable<any[]>;

  constructor(route: ActivatedRoute) {
    this.languages$ = route.data.pipe(
      map(data => data.languages as any[])
    );
  }
}
