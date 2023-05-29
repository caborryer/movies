const axios = require('axios');


class tmdb {
  constructor() {
    this.base = 'https://api.themoviedb.org/3/'
    this.apikey = '38e73fff75a56ceab612b735990996a2'
  }

  async makeRequest(url) {

    const result = await axios({
      url,

      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return result.data;
  }

  async getMostPopular() {
    const url = `${this.base}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`;
    const mostPopular = await this.makeRequest(url);
    console.log(mostPopular)

    return mostPopular;

  }

  async  getTheatresMovies() {
    const since = new Date();
    const until = new Date();
    until.setDate(until.getDate() + 7);

    const sinceStr = `${since.getFullYear()}-0${since.getMonth() - 1}-${since.getDate()}`;
    const untilStr = `${until.getFullYear()}-0${until.getMonth() }-${until.getDate()}`;

    const url = `${this.base}discover/movie?primary_release_date.gte=${sinceStr}&primary_release_date.lte=${untilStr}&api_key=${this.apikey}`;
    const TheatresMovies = await this.makeRequest(url);
    console.log(TheatresMovies)

    return TheatresMovies;
  }

}

module.exports = tmdb;
