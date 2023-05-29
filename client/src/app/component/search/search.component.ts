import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  private term: string;
  movies: any[] = [];
  loading: boolean;


  constructor(public moviesService: MoviesService,
              public activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['term']);
      if (params['term']) {
        this.term = params['term'];
        this.searchMovie(this.term);
      }
    });
  }

  searchMovie(term: string) {
    this.loading = true;
    console.log(term);
    this.moviesService.searchMovie(term)
      .subscribe( (data: any) => {
        console.log(data.results);
        this.movies = data.results;
        this.loading = false;
      } );
  }

}
