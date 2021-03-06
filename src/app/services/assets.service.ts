import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }

    getAssets() {
  		return this.http.get('https://gateway.eu1.mindsphere.io/api/assets');
  	}
}
 
