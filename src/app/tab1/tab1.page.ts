import {Component} from '@angular/core';
import {PostService} from "../services/post/post.service";
import {Observable} from "rxjs";
import {PostModel} from "../models/post.model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts$: Observable<PostModel[]>;

  // alternativní způsob výpisu
  posts: PostModel[] = [];

  constructor(
    private postService: PostService
  ) {
    // předám observable příspěvků
    this.posts$ = this.postService.index$();

    // alternativní zápis bez pipe | async na view
    this.postService.index$().subscribe(posts => {
      this.posts = posts;
    })

    // Ukázkový výpis do konzole
    this.postService.index$().subscribe(posts => {
      console.log(posts[0].title);
    })
  }

}
