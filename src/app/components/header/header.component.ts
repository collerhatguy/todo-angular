import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  @Output() onThemeChange = new EventEmitter();
  @Input() dark: boolean = true;

  constructor() { }

  switchTheme() {
    this.onThemeChange.emit()
  }
  ngOnInit(): void {
  }

}
