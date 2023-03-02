import {Component} from '@angular/core';
import {PostService} from "../services/post/post.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private postService: PostService
  ) {
    this.postService.index$().subscribe(posts => {
      console.log(posts);
    })
  }

}
