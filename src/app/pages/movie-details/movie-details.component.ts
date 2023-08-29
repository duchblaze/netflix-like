import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiSerrviceService } from 'src/app/service/movie-api-serrvice.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private service: MovieApiSerrviceService,
    private router: ActivatedRoute,
    private rout: Router,
    private title: Title
  ) {
    this.title.setTitle('Movie Details')
  };

  showMovieDetails: any;
  movieVideoResult: any;
  movieCastResult: any;

  ngOnInit() {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId#');
    this.movieDetails(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);

    // check on the scroll behavior when routing
    this.rout.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  movieDetails(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result)
      this.showMovieDetails = result;
    })
  }

  //get movie video
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'movie video');
      // this.movieVideoResult = result;
      result.results.forEach((element:any) => {
        if (element.type == "Trailer") {
          this.movieVideoResult = element.key
        }
      });
    })
  }

  //get movie cast
  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movie cast');
      this.movieCastResult = result.cast
    })
  }

}
