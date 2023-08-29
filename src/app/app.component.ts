import { Component, HostListener, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'netflix';

  navBg: any;
  isScrolled: boolean = false;
  ngxService: any;




  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#')

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.isScrolled = true;
      this.navBg = {
        'background-color': '#000000'
      }
    }
    else {
      this.isScrolled = false;
      this.navBg = {
        // 'background-color': '#F8F9FA',
        // 'color': 'black'
      }
    }
  }

  constructor ( ngxService: NgxUiLoaderService ) {}

  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);
  }

  // @HostListener('document:scroll')
  // scrollover() {
  //   const scrollPosition = window.scrollY;

  //   if (scrollPosition > 0) {
  //     const percentageScrolled = Math.min(scrollPosition / 200, 1); // Adjust 200 to control animation speed
  //     const backgroundColor = `rgba(0, 0, 0, ${percentageScrolled})`;

  //     this.navBg = {
  //       'background-color': backgroundColor
  //     };
  //   } else {
  //     this.navBg = {
  //       // 'background-color': '#F8F9FA',
  //       // 'color': 'black'
  //     };
  //   }
  // }
}
