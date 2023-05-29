import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform( movie: any, poster: boolean = false ): any {
    const url = 'http://image.tmdb.org/t/p/w300';

    if (poster) {
      return url + movie.poster_path
    }

    if (!movie) {
      return 'assets/img/no-image.jpeg';
    }
    if (movie.poster_path) {
      return url + movie.poster_path;
    } else {
      if (movie.backdrop_path) {
        return url + movie.backdrop_path;
      } else {
        return 'assets/img/no-image.jpeg';
      }

    }
  }
}
