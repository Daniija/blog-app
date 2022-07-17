import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {ScullyLibModule} from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ScullyLibModule
  ]
})
export class PostsModule { }
