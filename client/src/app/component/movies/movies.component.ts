import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  movie: any;
  backTo = '';
  // searching = '';

  constructor( public moviesService: MoviesService,
               public activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      console.log(params['id']);
      this.backTo = params['pag'];

      // if(params['searching']) {
      //   this.searching = params['searching'];
      // }
      this.moviesService.getMovie(params['id'])

        .subscribe(movie => {
          this.movie = movie
          console.log(movie);
        });
    });
  }

  ngOnInit(): void {
  }

}
