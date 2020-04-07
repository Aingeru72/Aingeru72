import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// SERVICES
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  public appName: string = environment.appName;
  public appVersion: string = environment.version;

  constructor(public theme: ThemeService) { }

  ngOnInit() { }

}