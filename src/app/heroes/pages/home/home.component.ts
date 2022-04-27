import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    // this.heroesService.getHeroes()
    //   //.subscribe(resp => console.log(resp))
    //   .subscribe(console.log);
  }

}
