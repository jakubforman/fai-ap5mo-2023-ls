import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PostModel} from "../../models/post.model";

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
    return this.http.get<PostModel[]>(`${environment.baseUrl}/posts`)
  }

  /**
   * Get post
   * 
   * Get single post
   * 
   * @param id Post ID
   */
  get$(id: number) {
    return this.http.get<PostModel>(`${environment.baseUrl}/posts/${id}`)
  }
}
