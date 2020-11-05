import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

    constructor(private http: HttpClient) { }

    getFiles() {
  		return this.http.get('https://gateway.eu1.mindsphere.io/api/files');
  	}
}
