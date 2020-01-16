import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-library';

  toRead = [
    new Book("Sula", "Toni Morrison", 1973)
  ];
}
