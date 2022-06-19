import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  about(){
    document.getElementById("aboutus")?.scrollIntoView({behavior:"smooth"})
  }
  contact(){
    document.getElementById("p1")?.scrollIntoView({behavior:"smooth"})
  }
  services(){
    document.getElementById("charts")?.scrollIntoView({behavior:"smooth"})
  }

}
