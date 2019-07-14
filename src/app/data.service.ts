import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBanners(){
    return this.http.get('https://www.gramedia.com/api/banners/?per_page=7/endpoint?callback=foo');
  }

  getMenus(){
    return this.http.get('https://www.gramedia.com/api/highlight-menu/');
  }

}
