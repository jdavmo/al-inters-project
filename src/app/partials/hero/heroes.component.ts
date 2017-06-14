import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
  this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}