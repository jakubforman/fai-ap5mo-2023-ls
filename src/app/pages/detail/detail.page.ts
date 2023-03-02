import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post/post.service";
import {Observable} from "rxjs";
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  post$: Observable<PostModel>;

  constructor(
    private postService: PostService
  ) {
    // TODO: id get from URL
    this.post$ = this.postService.get$(1);
  }

  ngOnInit() {
  }

}
