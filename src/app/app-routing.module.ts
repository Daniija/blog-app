import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent},
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: 'articles' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
