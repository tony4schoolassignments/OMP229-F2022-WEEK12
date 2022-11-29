import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const MOVIE_API = environment.apiUrl + '/movies/'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<any>{
    return this.httpClient.get(MOVIE_API+'list', httpOptions);
  }

  getMovie(id: string): Observable<any> {
    return this.httpClient.get(MOVIE_API+id, httpOptions);
  }

  addMovie(movie: any): Observable<any> {
    return this.httpClient.post(MOVIE_API+'add', movie, httpOptions);
  }

  editMovie(movie: any): Observable<any> {
    return this.httpClient.put(MOVIE_API+'edit/' + movie['_id'], movie, httpOptions);
  }

  deleteMovie(id: string): Observable<any> {
    return this.httpClient.delete(MOVIE_API+'delete/' + id, httpOptions);
  }

}
