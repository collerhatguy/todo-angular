import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  dark: Observable<boolean>= of(true);

  constructor() { }
  toggleDark() {
    this.dark = of(!this.dark);
  }
  getDark() {
    return this.dark;
  }
}
