import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRouting$: Observable<boolean>;

  constructor(
    router: Router
  ) {
    const navigationStart$ = router.events.pipe(
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );
    const navigationEnd$ = router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
      mapTo(false)
    );
    this.isRouting$ = merge(navigationStart$, navigationEnd$).pipe();
  }
}
