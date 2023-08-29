import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiSerrviceService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "7609dd24a0e8f2676d1c35ec999ffab3";
  queryData = "";

  bannerApi = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`

  bannerApiData(): Observable<any> {
   return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  // trending api
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  // search api
  searchMovie(data: any): Observable<any> {
    // console.log(data, 'api service#')
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }


  // movie details api
  getMovieDetails(data: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  // get movie video
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  // get movie cast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  // fetch action movie
  fetchActionMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }

  // fetch adventure movie
  fetchAdventureMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }

  // fetch animation movie
  fetchAnimationMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }

  // fetch comedy movie
  fetchComedyMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }

  // fetch documentary movie
  fetchDocumentaryMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }

  // fetch science fiction movie
  fetchScienceFictionMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }

  // fetch triller movie
  fetchTrillerMovie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }

  // test news api
  newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=19050ec3e70948fda939fe0e8c13f2f0'

  getNewsApi(): Observable<any> {
    return this.http.get(`${this.newsUrl}`)
  }

}
