import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as jquery from '../../tools/jquery.js';
import * as bootstrap from '../../tools/bootstrap.js';

enum SeasonsEnum {
  SEASON2016_2017 = 20162017,
  SEASON2017_2018 = 20172018,
  SEASON2018_2019 = 20182019,
}

declare var $: any;
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activate: Boolean;
  isBrowser: Boolean;
  isServer: Boolean;
  title = 'volejbal-sokol-benesov-v2';
  news: Array<Boolean> = [false, false, false];
  season2016_2017 = false;
  season2017_2018 = false;
  season2018_2019 = false;
  seasonsEnum = SeasonsEnum;
  images = ['/assets/img/dobris.jpg', '/assets/img/header11x.png', '/assets/img/header22x.png'];

  constructor (
    private _elRef: ElementRef,
    @Inject(PLATFORM_ID) platformId,
  ) {
    this.isServer = isPlatformServer(platformId);
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // $(jquery);
      // $(bootstrap);
    }
  }

  showNewsAllItem(index) {
    this.news[index] = true;
  }

  toggleSeason(season: number) {
    switch (season) {
      case this.seasonsEnum.SEASON2016_2017:
        this.season2016_2017 = !this.season2016_2017;
        break;
      case this.seasonsEnum.SEASON2017_2018:
        this.season2017_2018 = !this.season2017_2018;
        break;
      case this.seasonsEnum.SEASON2018_2019:
        this.season2018_2019 = !this.season2018_2019;
        break;
    }
  }
}
