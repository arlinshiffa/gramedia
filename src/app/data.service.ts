import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }  

  getBanners(){
    return this.http.get('https://www.gramedia.com/api/banners/?per_page=7/endpoint?callback=foo',this.httpOptions);
  }

  getMenus(){
    return this.http.get('https://www.gramedia.com/api/highlight-menu/',this.httpOptions);
  }

}
