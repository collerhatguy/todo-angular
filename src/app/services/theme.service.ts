import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  dark: boolean = true;

  constructor() { }
  toggleDark() {
    this.dark = !this.dark;
  }
  getDark() {
    return this.dark;
  }
}
