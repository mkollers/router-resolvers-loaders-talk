import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor() { }

  getAll() {
    return timer(3000).pipe(
      mapTo(data)
    );
  }
}

const data = [
  { rank: 1, name: 'JavaScript', active: 22.63 },
  { rank: 2, name: 'Python', active: 14.75 },
  { rank: 3, name: 'Java', active: 14.01 },
  { rank: 4, name: 'C++', active: 8.45 },
  { rank: 5, name: 'C', active: 6.03 },
  { rank: 6, name: 'PHP', active: 5.85 },
  { rank: 7, name: 'C#', active: 5.03 },
  { rank: 8, name: 'Shell', active: 4.85 },
  { rank: 9, name: 'Go', active: 4.10 },
  { rank: 10, name: 'TypeScript', active: 3.89 }
];
