import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  images = [
    {title: 'Open Fashion', short: 'From Eric Fonseca', src: "https://images3.alphacoders.com/823/thumb-1920-82317.jpg"},
    {title: 'Open Fashion', short: 'From Eric Fonseca', src: "https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg"},
    {title: 'Open Fashion', short: 'From Eric Fonseca', src: "https://wallpaperaccess.com/full/760289.jpg"}
  ];
  
  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  // constructor() { }

  ngOnInit(): void {
  }

}
