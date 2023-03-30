import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PostModel} from "../../models/post.model";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
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

  /**
   * Save post to viewed
   *
   * @param post Actual post
   */
  async save(post: PostModel) {
    let posts: PostModel[] | null = await this.storage.get('post-viewed');
    if (!posts) {
      posts = [];
    }

    // TODO: check if exist
    posts.push(post);

    await this.storage.save('posts-viewed', posts);
  }

  async viewed() {
    // TODO: create viewed as observable
  }
}
