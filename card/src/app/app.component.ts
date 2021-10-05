import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat tree",
      imageUrl: "/assets/images/tree.jpeg",
      username: "nature",
      content: "I saw this neat tree today"
    },
    {
      title: "mountain",
      imageUrl: "/assets/images/mountain.jpeg",
      username: "mountainlover",
      content: "Huge mountain."
    },
    {
      title: "Biking",
      imageUrl: "/assets/images/biking.jpeg",
      username: "biking",
      content: "I rode a bike"
    }
  ]
}
