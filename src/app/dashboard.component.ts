import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Logger } from './logger.service'
import { lg } from './app.module'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private logger: Logger
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(_ => {
        console.log(_);
        return this.heroes = _.slice(1, 5);
      }
    );
  }
}
