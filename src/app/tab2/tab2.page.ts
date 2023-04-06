import {Component} from '@angular/core';
import {PostService} from "../services/post/post.service";
import {PostModel} from "../models/post.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  posts: PostModel[] = [];

  constructor(
    private postService: PostService
  ) {

  }

  ionViewWillEnter() {
    this.postService.viewed().then(posts => {
      this.posts = posts;
    })
  }
}
