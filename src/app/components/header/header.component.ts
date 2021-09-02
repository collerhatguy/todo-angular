import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import switchTheme from 'src/app/actions/themeActions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  @Input() dark: boolean = true;

  constructor(private store: Store) { }

  switchTheme() {
    this.store.dispatch(switchTheme())
  }
  ngOnInit(): void {
  }

}
