import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})

export class CreateBookComponent implements OnInit {
  title: string = '';
  author: string = '';
  categories: string = '';

  bookId : number;
  constructor(
    private bookStoreService: BookStoreService, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {

  }
  
  saveChanges(): void {
      this.bookStoreService.addBook({
        "title": this.title,
        "author": {
          "name": this.author,
          "bio": "",
          "date_of_birth": null
      },
        "categories": this.categories.split(',').map(category => ({ name: category.trim() }))
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/book-store'], {
          });
        },
        (error: any) => {
  
          console.error(error);
          this.router.navigate(['/book-store'], {
          });
        }
      );
    }

  categoriesToString(categories: any[]): string {
    // Función para convertir categorías a una cadena
    let categoriesString = '';
    categories.forEach((category, index) => {
      categoriesString += category.name;
      if (index < categories.length - 1) {
        categoriesString += ', ';
      }
    });
    return categoriesString;
  }

}
