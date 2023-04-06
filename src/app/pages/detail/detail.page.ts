import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post/post.service";
import {Observable, tap} from "rxjs";
import {PostModel} from "../../models/post.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  post$: Observable<PostModel>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? "0");
    // TODO: id get from URL
    // Chaining JS structure
    this.post$ = this.postService.get$(id)
      .pipe(tap(post => {
        this.postService.save(post);
      }));

    // One line alternative chaining
    // this.post$ = this.postService.get$(1).pipe(tap(post => this.postService.save(post)));

    /* Alternative .pipe()
    this.post$.subscribe(post => {
      this.postService.save(post);
    })
    */
  }

  ngOnInit() {
  }

}
