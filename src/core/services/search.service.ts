import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL = `https://us-central1-tachanytime.cloudfunctions.net/`;
const SEARCH = `search`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  textSearch(keywords: string[]): Observable<any[]> {
    console.log({keys: keywords})
    return this.http.post<any[]>(`${API_URL}${SEARCH}`, {keys: keywords});
  }
}
