import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieApiSerrviceService } from 'src/app/service/movie-api-serrvice.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: any;
  noMovieFound!: boolean;
  disableButton!: boolean;

  typeSelected: string;

  constructor(
    private service: MovieApiSerrviceService,
    private builder: FormBuilder,
    private spinnerService: NgxSpinnerService,
    private title: Title
  ) {
    this.typeSelected = 'ball-fussion';
    this.title.setTitle("Movie Details | Netflix")
  }

  public showSpinner(): void {
    // this.spinnerService.show();

    // setTimeout(() => {
    //   this.spinnerService.hide();
    // }, 1000);
  }

  // searchForm = new FormGroup({
  //   "movieName": new FormControl('')
  // });

  searchForm = this.builder.group({
    "movieName": this.builder.control('', Validators.required)
  });

  ngOnInit() {
    this.submitForm;
    this.spinnerService.show();

    // setTimeout(() => {
    //   this.spinnerService.hide();
    // }, 2000);
  }


  submitForm() {
    console.log(this.searchForm.value)
    if (this.searchForm.dirty) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
    this.service.searchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResult = result.results;
      // console.log(result, 'api result#')
      if (result.results.length === 0) {
        this.noMovieFound = true;
      } else {
        this.noMovieFound = false;
      }
    })
  }

}
