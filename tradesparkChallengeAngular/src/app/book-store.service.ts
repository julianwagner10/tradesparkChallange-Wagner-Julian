import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private client: HttpClient) { }

  getBooks() {
    return this.client.get('http://localhost:8000/bookStore/books/')
  }

  getBookById(bookId: number) {
    const url = `http://localhost:8000/bookStore/books/${bookId}/`;
    return this.client.get(url);
  }

  addBook(bookData: any) {
    const url = 'http://localhost:8000/bookStore/books/';
    return this.client.post(url, bookData);
  }

  editBook(bookId: number, updatedBook: any) {
    const url = `http://localhost:8000/bookStore/books/${bookId}/`;
    return this.client.patch(url, updatedBook);
  }
  
  deleteBook(bookId: number) {
    const url = `http://localhost:8000/bookStore/books/${bookId}/`;
    return this.client.delete(url);
  }
}
