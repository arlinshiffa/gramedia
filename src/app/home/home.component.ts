import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: Object;
  menus :Object;
  slideIndex:any=1;
  bannerDisplay ="block";
  bannerIndex = 1;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBanners().subscribe(data =>{
      this.banners=data;
    })

    this.data.getMenus().subscribe(data =>{
      this.menus=data;
    })
  }

  showSlides(slideIndex);

  showSlides(n) {
      var slides = document.getElementsByClassName("mySlides");
      if (n> slides.length) {this.bannerIndex = 1} 
      if (n< 1) {this.bannerIndex= slides.length}
      console.log(n);
      
  }

  
  

   // Thumbnail image controls
   currentSlide(n) {
    this.showSlides(this.bannerIndex = n);
  }

   // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.bannerIndex += n);
    console.log(this.bannerIndex);
    
  }

}
