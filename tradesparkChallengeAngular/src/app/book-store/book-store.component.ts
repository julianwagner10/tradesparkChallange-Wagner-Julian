import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})

export class BookStoreComponent implements OnInit {

  books: any[] = [];
  filteredBooks: any[] = [];
  filterValue: string = '';
  selectedFilterType: string = 'title';
  categorySelected: { [key: string]: string } = {};
  Messages: { [key: string]: string } = {};

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit(): void {
    this.getBooks();
    
    /*La siguiente funcionalidad es para agregar mensajes de operacion exitosa o no.


    const state = window.history.state;
    if (state.operationSuccess) {
      // Si la operación fue exitosa, agrega un mensaje de éxito
      this.Messages[state.libroId] = `successful modification `;
    } else {
      // Si la operación no fue exitosa, agrega un mensaje de error
      this.Messages[state.libroId] = `wrong modification
      `;
    }
    setTimeout(() => {
      this.clearMessage(state.libroId);
    }, 2000);*/
    
  }

  categoriesToString(categories: any[]): string {
    let categoriesString = "";
    categories.forEach((category, index) => {
      categoriesString += category.name;
      if (index < categories.length - 1) {
        categoriesString += ", ";
      }
    });
    return categoriesString;
  }

  applyFilter(): void {
    const searchTerm = this.filterValue.toLowerCase();
    this.filteredBooks = this.books.filter(book => {
      let fieldValue = '';

      switch (this.selectedFilterType) {
        case 'title':
          fieldValue = book['title'].toLowerCase();
          return fieldValue === searchTerm;
        case 'author':
          fieldValue = book['author']['name'].toLowerCase();
          return fieldValue === searchTerm;
        case 'category':
          fieldValue = book['categories'].some(category => category.name.toLowerCase() === searchTerm);
          return fieldValue;
      }

      return false;
    });
  }

  deleteBook(book_id: number):void{

    this.bookStoreService.deleteBook(book_id
    ).subscribe(
      (response: any) => {
        this.getBooks();
      },
      (error: any) => {
      }
    );
  }

  clearMessage(libroId: number): void {
    this.Messages[libroId] = ''; 
  }

  getBooks(){
  this.bookStoreService.getBooks().subscribe((data: any[]) => {
    this.books = data;
    this.filteredBooks = data; // Inicialmente, muestra todos los libros
  })
  
}
}