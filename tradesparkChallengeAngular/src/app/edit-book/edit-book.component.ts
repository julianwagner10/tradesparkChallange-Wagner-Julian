import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  editedBook: any = {};
  editedBookCategories: string = '';
  bookId : number;
  constructor(
    private bookStoreService: BookStoreService, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
   
    this.bookStoreService.getBookById(this.bookId).subscribe((data: any) => {
      this.editedBook = data;
      this.editedBookCategories = this.categoriesToString(data.categories);
    });
  
  }
  
  saveChanges(): void {
      this.bookStoreService.editBook(this.bookId,{
        "title":this.editedBook.title,
        "author":{"name": this.editedBook["author"]["name"],
        "bio": "",
        "date_of_birth": null
    },
        "categories": this.editedBookCategories.split(',').map(category => ({ name: category.trim() }))
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/book-store'], {
            state: {
              operationSuccess: true, 
              libroId: this.editedBook.id
            },
          });
        },
        (error: any) => {
  
          console.error(error);
          this.router.navigate(['/book-store'], {
            state: {
              operationSuccess: false, 
              libroId: this.editedBook.id
            },
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
