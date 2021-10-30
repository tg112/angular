import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: any = [];
  // Injectionした場合、引数の順序を問わない
  constructor(private wikipedia:WikipediaService) {}

  // Emitされた子からの値を受け取る
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe(pages => {
      this.pages = pages
    });
  }
}
