import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

enum SeasonsEnum {
  SEASON2016_2017 = 20162017,
  SEASON2017_2018 = 20172018
}

declare var $: any;

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
  seasonsEnum = SeasonsEnum;

  constructor (
    private _elRef: ElementRef,
    @Inject(PLATFORM_ID) platformId
  ) {
    this.isServer = isPlatformServer(platformId);
    this.isBrowser = !this.isServer;
  }

  ngOnInit() {
    if (this.isBrowser) {
      $(require('../../tools/jquery.js'));
      $(require('../../tools/bootstrap.js'));
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
    }
  }
}
