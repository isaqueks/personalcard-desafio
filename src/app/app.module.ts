import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { CardComponent } from './components/card/card.component';
import { UserListPageComponent } from './pages/users/user-list-page/user-list-page.component';
import { UserCreatePageComponent } from './pages/users/user-create-page/user-create-page.component';
import { PostCreatePageComponent } from './pages/posts/post-create-page/post-create-page.component';
import { PostListPageComponent } from './pages/posts/post-list-page/post-list-page.component';
import { UserBrowserComponent } from './components/user-browser/user-browser.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatedDataComponent } from './components/paginated-data/paginated-data.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostBrowserComponent } from './components/post-browser/post-browser.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FieldComponent } from './components/field/field.component';
import { EntityActionComponent } from './components/entity-action/entity-action.component';
import { EntityBrowserComponent } from './components/entity-browser/entity-browser.component';
import { SkeletonPlaceholderComponent } from './components/skeleton-placeholder/skeleton-placeholder.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { UserSearchFieldComponent } from './components/user-search-field/user-search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserViewComponent,
    CardComponent,
    UserListPageComponent,
    UserCreatePageComponent,
    PostCreatePageComponent,
    PostListPageComponent,
    UserBrowserComponent,
    FilterComponent,
    PaginatedDataComponent,
    UserFormComponent,
    PostViewComponent,
    PostBrowserComponent,
    PostFormComponent,
    FieldComponent,
    EntityActionComponent,
    EntityBrowserComponent,
    SkeletonPlaceholderComponent,
    ButtonComponent,
    FormComponent,
    UserSearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
