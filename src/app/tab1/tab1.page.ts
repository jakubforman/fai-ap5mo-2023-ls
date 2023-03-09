import {Component} from '@angular/core';
import {PostService} from "../services/post/post.service";
import {Observable, ReplaySubject} from "rxjs";
import {PostModel} from "../models/post.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Vytvořím subject pro vlastní observable
  private postsSubject = new ReplaySubject<PostModel[]>(1);

  get posts$() {
    return this.postsSubject.asObservable();
  }

  constructor(
    private postService: PostService
  ) {
    this.postService.index$().subscribe(posts => {
      this.postsSubject.next(posts);
    })
  }

  /**
   * Filter posts by title
   *
   * Use index$()
   *
   * @param event
   */
  handleChange(event: any) {
    // kontrola pokud value nic neobsahuje, dej mi všechny příspěvky
    if (!event.detail.value) {
      this.postService.index$().subscribe(posts => {
        this.postsSubject.next(posts);
      })
      return;
    }

    // získat posty
    this.postService.index$().subscribe(posts => {
      // filtrace postů podle titulku
      const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
      });

      // předání vyfiltrovaných dat do subjectu
      this.postsSubject.next(filteredPosts);
    });
  }
}
