import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = '38e73fff75a56ceab612b735990996a2';
  private urlMoviedb = 'https://api.themoviedb.org/3/';

  movies: any[] = [];

  constructor(private http: HttpClient) { }

  getMostPopular() {
    return this.http.get (`${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`);
  }

  getTheatresMovies() {

    return this.http.get(`${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=en-US&page=1`);
  }
  getDramaMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get (`${ this.urlMoviedb }discover/movie?with_genres=18&primary_release_year=2019&api_key=${ this.apikey }`);

  }

  searchMovie( term: string) {
    return this.http.get (`${ this.urlMoviedb }search/movie?query=${ term }&sort_by=popularity.desc&api_key=${ this.apikey }`);
  }

  getMovie(id: string) {

    return this.http.get (`${ this.urlMoviedb }movie/${id}?&api_key=${ this.apikey }`);

  }


}
