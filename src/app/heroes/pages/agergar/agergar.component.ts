import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agergar',
  templateUrl: './agergar.component.html',
  styleUrls: ['./agergar.component.scss']
})
export class AgergarComponent implements OnInit {

  publisher = [

    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: ''
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snakBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroe(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  guardar(): void  {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
        .subscribe(resp => {
          this.mostrarSnackBar('Registro actualizado','green-snackbar');
        });
    } else {
      this.heroesService.setHeroe(this.heroe)
        .subscribe(h => {
          this.router.navigate(['/heroes/editar', h.id]);
          this.mostrarSnackBar('Registro creado', 'blue-snackbar');
        });
    }
  }

  borrar(): void  {
    this.heroesService.deleteHeroe(this.heroe.id!)
      .subscribe( resp => {
        this.router.navigate(['/heroes']);
      });
  }

  mostrarSnackBar(mensaje: string, color: string): void {
    this.snakBar.open(mensaje, 'ok',{
      duration: 2500,
      panelClass: [`${color}`]
    });
  }
}
