import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  posts: ScullyRoute[] = [];

  // implement the ngondestroy method
  private routeSub: Subscription | undefined;

  // When we want to use and angular service we add it to the constructor
  constructor(private scullyService: ScullyRoutesService) {
  }

  // Called by the angular framework when a component is initialized which enables us to add custom login to be exicuted
  // available$ is called an observable
  ngOnInit(): void {
    this.routeSub =
      this.scullyService.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

}
