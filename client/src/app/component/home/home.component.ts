import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  mostPopular: any[] = [];
  drama: any[] = [];
  inTheaters: any[] = [];



  constructor(public moviesService: MoviesService) {

    this.moviesService.getMostPopular()
      .subscribe((movies: any) => {
        console.log(movies.results);
        this.mostPopular = movies.results;
      });

    this.moviesService.getTheatresMovies()
      .subscribe((data: any) => {
        console.log(data.results);
        this.inTheaters = data.results;
      } );

    this.moviesService.getDramaMovies()
      .subscribe((data: any) => {
        console.log(data.results);
        this.drama = data.results;
      } );
  }

  ngOnInit(): void {

  }

}
