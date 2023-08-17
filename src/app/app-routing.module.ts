import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from './pages/posts/post-list-page/post-list-page.component';
import { UserListPageComponent } from './pages/users/user-list-page/user-list-page.component';
import { UserCreatePageComponent } from './pages/users/user-create-page/user-create-page.component';
import { PostCreatePageComponent } from './pages/posts/post-create-page/post-create-page.component';
import { UserViewPageComponent } from './pages/users/user-view-page/user-view-page.component';

const routes: Routes = [
    { path: 'users',        component: UserListPageComponent },
    { path: 'users/create', component: UserCreatePageComponent },
    { path: 'users/view', component: UserViewPageComponent },
    { path: 'posts',        component: PostListPageComponent },
    { path: 'posts/create', component: PostCreatePageComponent },

    { path: '',   redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
