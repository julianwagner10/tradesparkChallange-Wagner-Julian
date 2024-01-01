import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  { path: 'book-store', component: BookStoreComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'edit-book/:id', component: EditBookComponent }, 
  { path: 'create-book', component: CreateBookComponent }, 
  { path: '**', redirectTo: 'main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
