import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private http: HttpClient) { }

  getWigets() {
  	return this.http.get('https://gateway.eu1.mindsphere.io/api/widgets');
  }
}
