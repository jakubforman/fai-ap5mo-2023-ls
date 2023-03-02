import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Post index
   *
   * Get all Posts
   *
   * @return Observable
   */
  index$() {
    // alternative
    // return this.http.get(environment.baseUrl + "/posts");
    return this.http.get(`${environment.baseUrl}/posts`)
  }
}
