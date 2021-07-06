import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  dark!: boolean;

  constructor(private themeService: ThemeService) { }

  switchTheme() {
    this.themeService.toggleDark()
    this.dark = this.themeService.getDark();
  }
  ngOnInit(): void {
    this.dark = this.themeService.getDark()
  }

}
