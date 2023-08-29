import { Component, OnInit } from '@angular/core';
import { MovieApiSerrviceService } from 'src/app/service/movie-api-serrvice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiSerrviceService) { }

  //movie arrays
  movieArray: any = [];
  trendingMovie: any = [];
  actionMovies: any = [];
  comedyMovies: any = [];
  adventurousMovies: any = [];
  animationMovies: any = [];
  documentaryMovies: any = [];
  trillerMovies: any = [];
  scienceFictionMovies: any = [];
  newsResult: any = [];


  ngOnInit() {
    this.bannerData();
    this.trendingDataMovie();
    this.getActionMovie();
    this.getComedyMovies();
    this.getAdventorousMovies();
    this.getAnimationMovies();
    this.getScienceFictionMovies();
    this.getDocumentaryMovies();
    this.getTrillerMovies();
    this.getNewsResult();

  }

  //banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.movieArray = result.results;
      // console.log(this.movieArray);
    })
  }

  //trending movies
  trendingDataMovie() {
    this.service.trendingMovieApiData().subscribe((result) => {

      this.trendingMovie = result.results;
      // console.log(this.trendingMovie)
    })
  }

  //action movies
  getActionMovie() {
    this.service.fetchActionMovie().subscribe((result) => {
      this.actionMovies = result.results;
      console.log(this.actionMovies, 'action movies')
    })
  }

  //comic movies
  getComedyMovies() {
    this.service.fetchComedyMovie().subscribe((result) => {
      this.comedyMovies = result.results
    })
  }

  //adventurous movies
  getAdventorousMovies() {
    this.service.fetchAdventureMovie().subscribe((result) => {
      this.adventurousMovies = result.results
    })
  }

  //animation movies
  getAnimationMovies() {
    this.service.fetchAnimationMovie().subscribe((result) => {
      this.animationMovies = result.results
    })
  }

  //Documentary movies
  getDocumentaryMovies() {
    this.service.fetchDocumentaryMovie().subscribe((result) => {
      this.documentaryMovies = result.results
    })
  }

  //science fiction movies
  getScienceFictionMovies() {
    this.service.fetchScienceFictionMovie().subscribe((result) => {
      this.scienceFictionMovies = result.results
    })
  }

  //triller movies
  getTrillerMovies() {
    this.service.fetchTrillerMovie().subscribe((result) => {
      this.trillerMovies = result.results
    })
  }

  // news api results
  getNewsResult() {
    this.service.getNewsApi().subscribe((result) => {
      console.log(result, 'News API#');
      this.newsResult = result.articles
    })
  }

}
